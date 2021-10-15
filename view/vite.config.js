import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import styleImport from 'vite-plugin-style-import'

const resolve = dir => path.join(__dirname, dir)

const remote = 'http://localhost:3000'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',

  plugins: [
    vue(),
    styleImport({
      libs: [{
        libraryName: 'element-plus',
        esModule: true,
        ensureStyleFile: true,
        resolveStyle: (name) => {
          name = name.slice(3)
          return `element-plus/packages/theme-chalk/src/${name}.scss`;
        },
        resolveComponent: (name) => {
          return `element-plus/lib/${name}`;
        },
      }]
    })
  ],

  // alias
  resolve: {
    alias: {
      '@': resolve('src')
    }
  },

  // postcss
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `$injectedColor: orange;`
      }
    }
  },

  // serevr
  server: {
    host: '127.0.0.1',
    port: 8080,
    open: true,
    proxy: {
      "/base": {
        target: remote,
        secure: false,  //https
        changeOrigin: true,  //跨域
      },
    }
  },

  build: {
    // mode: 'production'
  }
})

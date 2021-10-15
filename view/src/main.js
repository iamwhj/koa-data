import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import ElementPlus from 'element-plus';
// import 'element-plus/lib/theme-chalk/index.css';
import ElementPlus from './register-element'
import 'element-plus/packages/theme-chalk/src/base.scss'
import './style/index.scss'


createApp(App)
.use(router)
.use(store)
.use(ElementPlus)
.mount('#app')

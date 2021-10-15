<template>
  <div>
    <el-container>
      <el-header>
        <NavBar></NavBar>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
import NavBar from './components/navBar.vue';
</script>

<style lang="scss" scoped>

</style>
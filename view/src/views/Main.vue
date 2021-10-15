<template>
  <div>
    <SearchBox @changeData="changeDataList"></SearchBox>
    <DataBox :tableData="dataList" ></DataBox>
  </div>
</template>

<script setup>
  import SearchBox from './components/searchBox.vue'
  import DataBox from './components/dataBox.vue'
  import { ref } from 'vue'

  let dataList = ref([])

  const changeDataList = function (data) {
    dataList.value = data
  }


</script>

<style scoped>
</style>
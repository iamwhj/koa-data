<template>
  <div>
    <el-input v-model="tableName" placeholder="请输入需要查询的表名"></el-input>
    <el-button type="primary" icon="el-icon-search" @click="queryFn">查询</el-button>
    <el-button type="danger" @click="dialogInsert=true">插入数据</el-button>
  </div>

  <el-dialog title="新增一条数据" v-model="dialogInsert" width="600px">
    <div class="tableName">
      <span>cname: </span>
      <el-input v-model="tableName" placeholder="table name" size="small"></el-input>
    </div>
    <span>field: </span>
    <div v-for="(item, index) in insertInfo" :key="index" style="margin: 10px 0 0 0; height: 40px;">
      <el-input v-model="item.key" placeholder="key" size="small"></el-input>
      <el-input v-model="item.value" placeholder="value" size="small"></el-input>
      <el-button type="danger" size="mini" @click="deleteItem(index)">删除</el-button>
    </div>
    <el-button type="primary" size="mini" @click="addItem">增加</el-button>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogInsert = false">取 消</el-button>
        <el-button type="primary" @click="insertFn">确 定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
  import { ref, defineEmits } from 'vue'
  import { useStore } from 'vuex'
  import { SelectAll, InsertOne } from '@/api/index.js'

  let tableName = ref('user')

  const store = useStore()

  const emit = defineEmits(['changeData'])
  const queryFn = () => {
    SelectAll({cname: tableName.value})
    .then(result => {
      let res = result.data
      if (res.code === 0) {
        let data = res.data.doc_list || []
        emit('changeData', data)
        store.commit('changeCname', tableName.value)
      }
    })
  }
  store.commit('changeQueryFn', queryFn)


  const dialogInsert = ref(false)
  const insertInfo = ref([{key: '', value: ''}])

  const addItem = () => insertInfo.value.push({key: '', value: ''})
  const deleteItem = (i) => insertInfo.value.splice(i, 1)

  const handleInsertData = () => {
    let insertModel = {
      "cname": tableName.value
    }

    let doc = {}
    for (const item of insertInfo.value) {
      const { key, value } = item
      doc[key] = Number.isNaN(value * 1) ? value : value * 1
    }
    insertModel.doc = doc
    return insertModel
  }

  const insertFn = () => {
    const insertModel = handleInsertData()
    InsertOne(insertModel)
    .then(result => {
      let res = result.data
      if (res.code === 0) {
        queryFn()
        dialogInsert.value = false
        insertInfo.value = [{key: '', value: ''}]
      }
    })
  }

</script>

<style lang="scss" scoped>
  div {
    margin-bottom: 20px;
    .el-input {
      width: 200px;
      margin-right: 20px;
    }
  }
</style>
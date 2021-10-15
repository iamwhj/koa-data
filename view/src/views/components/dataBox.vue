<template>
  <div v-if="tableData.length">
    <el-table
      :data="tableData"
      border
      style="width: 95%">
      <el-table-column  el-table-column label="序号" width="80" align="center">
          <template #default="scope">
              {{scope.$index + 1}}
          </template>
      </el-table-column>

      <el-table-column
        v-for="key in keysList"
        :key="key"
        :prop="key"
        :label="key"
        width="width"
        align="center">
      </el-table-column>

      <el-table-column  el-table-column label="操作" width="180" align="center">
          <template #default="scope">
              <el-button type="danger" @click="openEdit(scope.row)">编辑</el-button>
              <el-button type="info" @click="deleteData(scope.row)">删除</el-button>
          </template>
      </el-table-column>
    </el-table>
  </div>

  <el-dialog title="编辑数据" v-model="dialogEdit" width="600px">
    <div v-for="(item, index) in editData" :key="index" style="margin: 10px 0 0 0; height: 40px;">
      <el-input v-model="item.key" placeholder="key" size="small"></el-input>
      <el-input v-model="item.value" placeholder="value" size="small"></el-input>
      <el-button type="danger" size="mini" @click="deleteItem(index)">删除</el-button>
    </div>
    <el-button type="primary" size="mini" @click="addItem">增加</el-button>

    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogEdit = false">取 消</el-button>
        <el-button type="primary" @click="editFn">确 定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
  import { defineProps, computed, ref } from 'vue'
  import { DeleteOne, ReplaceOne } from '@/api/index.js'
  import { useStore } from 'vuex'

  const props = defineProps({
    tableData: {
      type: Array,
      default: []
    }
  })
  const store = useStore()

  let keysList = computed(() => props.tableData.length ? Object.keys(props.tableData[0]) : [])

  const deleteData = ({_id}) => {
    DeleteOne({cname: store.state.cname, _id})
    .then(result => {
      let res = result.data
      if (res.code === 0) {
        const fn = store.state.queryFn
        typeof fn === 'function' ? fn() : ''
      }
    })
  }

  const dialogEdit = ref(false)
  let editData = ref([])
  let editId = '';
  const addItem = () => editData.value.push({key: '', value: ''})
  const deleteItem = (i) => editData.value.splice(i, 1)

  const openEdit = (item) => {
    let temp = []
    for (const key in item) {
      if (key !== '_id') {
        temp.push({key: key, value: item[key]})
      }else {
        editId = item[key]
      }
    }
    editData.value = temp
    dialogEdit.value = true
  }

  const handleEditData = () => {
    let editModel = {
      "cname": store.state.cname,
      "_id": editId
    }

    let doc = {}
    for (const item of editData.value) {
      const { key, value } = item
      doc[key] = Number.isNaN(value * 1) ? value : value * 1
    }
    editModel.doc = doc
    return editModel
  }
  const editFn = () => {
    let editModel = handleEditData()
    ReplaceOne(editModel)
    .then(result => {
      let res = result.data
      if (res.code === 0) {
        const fn = store.state.queryFn
        typeof fn === 'function' ? fn() : ''

        dialogEdit.value = false
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
<template>
  <div class="pagination" :style="$attrs">
    <el-pagination
        background
        layout="prev, pager, next"
        style="width: 100%; text-align: center; margin-top: 20px;"
        :total="count"
        :page-size="pageSize"
        :current-page="currentPageNum"
        @current-change="showPage">
    </el-pagination>
    <div class="page-box">
      <el-input v-model.number="pageSizeNum" size="mini" @keydown.enter="changePageSize"></el-input>{{ $t('share.strip') }}
    </div>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    showPage: {
      type: Function,
      required: true
    },
    count: {
      type: Number,
      default: 0
    },
    getCurrentPageNum: {
      type: Function
    }
  },
  data() {
    return {
      pageSizeNum: 0,
      currentPageNum: 1,
    }
  },
  computed: {
    pageSize() {
      let pageSize = this.$store.getters.pageSize
      this.pageSizeNum = pageSize
      return pageSize
    }
  },
  watch: {
    currentPageNum() {
      this.$emit('getCurrentPageNum', this.currentPageNum)
    }
  },
  methods: {
    changePageSize() {
      this.$store.commit('data/change_pageSize', this.pageSizeNum)

      this.currentPageNum = 1
      this.showPage()
    }
  }
}
</script>

<style lang="scss" scoped>
  .pagination {
    position: relative;
    .page-box {
      position: absolute;
      right: 0;
      top: 0;
      .el-input {
        width: 54px;
      }
    }
  }
</style>
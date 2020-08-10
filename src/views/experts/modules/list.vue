<template>
  <div class="p-experts-list">
    <panelHead
        title="专家信息"
    >
      <el-button
          v-if="userInfo.cate==='operator'"
          @click="openEnterMask"
          type="primary"
          icon="el-icon-circle-plus-outline">录入</el-button>
    </panelHead>

    <div class="p-config-body">
      <ul class="p-table-row p-head-row">
        <li>专家信息项</li>
        <li>性别</li>
        <li>年龄</li>
        <li></li>
      </ul>
      <no-data v-if="isNoData" info="暂无专家信息！"></no-data>
      <ul
          v-if="!isNoData"
          class="p-table-row p-body-row"
          v-for="(i, index) in expertsList"
          :key="index"
      >
        <li>{{i.name}}</li>
        <li>{{i.gender}}</li>
        <li>{{i.age}}</li>
        <li class="p-operate">
          <span @click="goDetail(i)">
            <i class="el-icon-menu"></i>
            更多信息
          </span>

          <el-popconfirm
              title="你确定删除吗？"
              iconColor="red"
              v-if="userInfo.cate==='operator'"
              @onConfirm="delExpert(i.name)"
          >
            <span class="p-del"  slot="reference">
              <i class="el-icon-delete"></i>
              删除
            </span>
          </el-popconfirm>
        </li>
      </ul>
      <el-pagination
          class="p-pagination"
          v-if="!isNoData"
          layout="prev, pager, next"
          :total="pagination.total"
          :page-size="pagination.pageSize"
          :hide-on-single-page="true"
          @current-change="pageChange"
      >
      </el-pagination>
    </div>

  </div>
</template>
<script>
  import panelHead from "@c/panelHead.vue"
  import noData from "@c/noData.vue"
  import { mapState } from 'vuex'
  export default {
    name: '',
    components: {panelHead, noData},
    data() {
      return {
        isNoData: false,
        isLoading: false,
        expertsList: [
          {id:1, name:'专家a', gender: '男', age: 40},
          {id:2, name:'专家b', gender: '男', age: 40},
          {id:3, name:'专家c', gender: '男', age: 40}
        ],
        //分页
        pagination: {
          total: 3,
          pageSize: 2,
          cur: 1, //当前页数
        }
      }
    },
    computed: {
      ...mapState(['userInfo'])
    },
    created() {
    },
    mounted() {
    },
    methods: {
      delExpert(name) {
        this.expertsList.splice(
          this.expertsList.findIndex(expert=>expert.name===name),
          1
        )
      },
      pageChange(cur) {
        this.pagination.cur = cur
      },
      goDetail(expert) {
        this.$router.push({
          path:'/experts/detail',
          query: {id: expert.id}
        })
      },
      /**********************dialog***********************/
      openEnterMask() {

      }
    },
    watch: {
      expertsList(newVal, oldVal){
        newVal.length===0
          ?this.isNoData = true
          :this.isNoData = false
      }
    }
  }
</script>
<style lang="scss" scoped>
  .p-experts-list {
    .p-config-body{
      margin-top: 20px;
      font-size: 14px;
      @include panel;
      .p-table-row{
        @include vertical-center;
        justify-content: flex-start;
        border-bottom: 1px dashed #dddddd;
        height: 60px;
        li{
          flex: 1;
        }
      }
      .p-body-row{
        &:hover{
          background-color: #f6f7fb;
        }
        .p-operate{
          cursor: pointer;
          i{
            color: $theme;
          }
          .p-del{
            margin-left: 20px;
          }
        }
      }
    }
    .p-pagination{
      margin-top: 20px;
      display: flex;
      justify-content: flex-end;
    }
  }
</style>

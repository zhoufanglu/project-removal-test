<template>
  <div class="p-entry-config">
    <div class="p-config-head">
      <panelHead
          title="专家录入配置"
      >
        <el-button
            @click="openMask"
            type="primary"
            icon="el-icon-circle-plus-outline">添加</el-button>
      </panelHead>
    </div>

    <div class="p-config-body">
      <ul class="p-table-row p-head-row">
        <li>专家信息项</li>
        <li>信息内容</li>
        <li>操作</li>
      </ul>
      <ul class="p-table-row p-body-row"
        v-for="(i, index) in configList"
          :key="index"
      >
        <li>{{i.label}}</li>
        <li class="p-tag-list">
          <el-tag v-for="(item, index2) in i.children"
                :key="index2"
          >
            {{item}}
          </el-tag>
        </li>
        <li class="p-operate">
          <span @click="openMask({cate:'edit',info:i})">
            <i class="el-icon-edit"></i>
            编辑
          </span>
          <el-popconfirm
              title="你确定删除吗？"
              iconColor="red"
              @onConfirm="delInfo(i)"
          >
            <span class="p-del"  slot="reference">
              <i class="el-icon-delete"></i>
              删除
            </span>
          </el-popconfirm>
        </li>
      </ul>
    </div>
    <!--dialog-->
    <el-dialog
        :title="dialog.cate==='add'?'添加':'编辑'"
        :visible.sync="dialog.isShow"
        width="30%"
    >
      <div class="dialog-panel">
        <el-form label-width="100px">
          <el-form-item label="专家信息项:">
            <el-input v-model="dialog.configLabel"></el-input>
          </el-form-item>
          <el-form-item label="信息内容:">
            <el-tag v-for="(item, index2) in dialog.children"
                    :key="index2"
            >
              {{item}}
            </el-tag>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialog.isShow=false">取 消</el-button>
        <el-button type="primary" @click="save">确 定</el-button>
      </span>
    </el-dialog>


  </div>
</template>
<script>
  import panelHead from "@c/panelHead.vue"
  export default {
    name: '',
    components: {
      panelHead
    },
    data() {
      return {
        configList: [
          {
            label: '单位性质',
            children: ['基地', '事业单位', '政府单位','基地', '事业单位', '政府单位']
          }
        ],
        dialog: {
          isShow: true,
          cate: 'edit', //edit add
          configLabel: '',
          children: []
        }
      }
    },
    created() {
    },
    mounted() {
    },
    methods: {
      openMask({cate='add', info}) {
        this.dialog.isShow = true
        this.dialog.cate = cate
        if(cate === 'edit'){
          this.dialog.configLabel = info.label
          this.dialog.children = info.children
        }else{
          this.dialog.configLabel = ''
          this.dialog.children = []
        }
      },
      delInfo(i) {
        console.log(76, i)
      },
      /**********************dialog***********************/
      save() {
        this.dialog.isShow = false
      }
    }
  }
</script>
<style lang="scss" scoped>
  .p-entry-config {
    .p-config-head{
    }
    .p-config-body{
      margin-top: 20px;
      @include panel;
      .p-head-row{
        font-weight: bolder;
        border-bottom: 1px solid #dddddd!important;
      }
      .p-table-row{
        @include vertical-center;
        justify-content: flex-start;
        border-bottom: 1px dashed #dddddd;
        min-height: 60px;
        li:first-child{
          flex: 1;
        }
        li:nth-child(2){
          flex: 2;
        }
        li:last-child{
         flex: 1;
        }
      }
      .p-body-row{
        &:hover{
          background-color: #f6f7fb;
        }
        .p-tag-list{
          @include vertical-center;
          flex-wrap: wrap;
          .el-tag{
            margin-right: 20px;
            margin-top: 10px;
            margin-bottom: 10px;
          }
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
  }
</style>

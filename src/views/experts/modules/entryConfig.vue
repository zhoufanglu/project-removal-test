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
      <no-data v-if="isNoData" info="暂无配置数据信息！"></no-data>
      <ul
          v-if="!isNoData"
          class="p-table-row p-body-row"
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
      <div class="entry-config-dialog">
        <el-form label-width="100px">
          <el-form-item label="专家信息项:">
            <el-input v-model="dialog.configLabel"></el-input>
          </el-form-item>
          <el-form-item label="信息内容:">
            <div class="info-tag">
              <el-tag v-for="(item, index2) in dialog.children"
                      :key="index2"
                      closable
                      :disable-transitions="false"
                      size="medium"
                      @close="tagRemove(item)"
              >
                {{item}}
              </el-tag>

              <el-input
                  class="input-new-tag"
                  v-if="tagInput.inputVisible"
                  v-model.trim="tagInput.inputValue"
                  ref="saveTagInput"
                  size="small"
                  @keyup.enter.native="addTag"
                  @blur="addTag"
              >
              </el-input>
              <el-button
                  v-else
                  class="button-new-tag"
                  size="small"
                  @click="showTagInput">+ 新增</el-button>
            </div>
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
  import noData from "@c/noData.vue"
  export default {
    name: '',
    components: {
      panelHead,
      noData
    },
    data() {
      return {
        isNoData: false,
        isLoading: false,

        configList: [
          {
            id: 1,
            label: '单位性质',
            children: ['基地', '事业单位', '政府单位','基地1', '事业单位1', '政府单位1']
          },
          {
            id: 2,
            label: '专家特点',
            children: ['制造业', '仓储物流']
          },
        ],
        dialog: {
          isShow: false,
          cate: 'edit', //edit add
          configLabel: '',
          children: []
        },
        tagInput: {
          inputVisible: false,
          inputValue: ''
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
          this.dialog.children = [...info.children]
        }else{
          this.dialog.configLabel = ''
          this.dialog.children = []
        }
      },
      delInfo(i) {
        console.log(76, i)
        this.configList.splice(
          this.configList.findIndex(c=>i.label===c.label)
          ,1)
      },
      /**********************dialog***********************/
      save() {
        let msg = '', flag = true
        if(this.dialog.children.length === 0) {
          flag = false
          msg = '信息内容不能为空！'
        }else if(this.dialog.configLabel === '') {
          flag = false
          msg = '专家信息不能为空！'
        }
        if(flag){
          this.dialog.isShow = false
          //响应请求
          this.setConfig()
        }else {
          this.$message({type:'error', message: msg})
        }
      },
      tagRemove(item) {
        const removeIndex = this.dialog.children.findIndex(c => item === c)
        this.dialog.children.splice(removeIndex, 1)
      },
      addTag() {
        let inputValue = this.tagInput.inputValue
        //不能重复添加
        const findIndex = this.dialog.children.findIndex(c=>c===inputValue)
        if(findIndex !== -1){
          this.$message({type:"error", message: '不能重复添加！'})
          return false
        }
        if(inputValue){
          this.dialog.children.push(inputValue)
        }
        this.tagInput.inputVisible = false
        this.tagInput.inputValue = ''
      },
      showTagInput() {
        this.tagInput.inputVisible = true
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        })
      },
      /**********************request***********************/
      setConfig() {
        if(this.dialog.cate === 'add'){
          this.configList.push({
            label: this.dialog.configLabel,
            children: [...this.dialog.children]
          })
        }else if(this.dialog.cate === 'edit'){

        }
        console.log(199, this.configList)
      },
    },
    watch: {
      configList(newVal, oldVal){
        newVal.length===0
          ?this.isNoData = true
          :this.isNoData = false
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
      font-size: 14px;
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

<style lang="scss">
  .p-entry-config{
    .entry-config-dialog{
      .info-tag{
        display: flex;
        flex-wrap: wrap;
        .el-tag{
          margin-right: 20px;
          margin-top: 10px;
        }
      }
      .button-new-tag{
        background-color: #ebf5ff;
        border-color: #d6ebff;
        color: #3399ff;
        display: inline-block;
        padding: 0 10px;
        font-size: 12px;
        border-width: 1px;
        border-style: solid;
        border-radius: 4px;
        box-sizing: border-box;
        white-space: nowrap;
        margin-top: 10px;
        height: 28px;
        line-height: 26px;
      }
    }
  }
</style>

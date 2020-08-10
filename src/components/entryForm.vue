<template>
  <div class="p-entry-form">

    <el-form
        label-position="left"
        label-width="80px"
        class="entry-form"
    >

      <el-form-item label="姓名">
        <el-input v-model="expert.name"></el-input>
      </el-form-item>

      <el-form-item label="性别">
        <el-radio-group v-model="expert.gender">
          <el-radio label="男"></el-radio>
          <el-radio label="女"></el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="出生日期" prop="region">
        <el-date-picker
            v-model="expert.born"
            type="date"
            placeholder="选择日期">
        </el-date-picker>
      </el-form-item>

      <el-divider></el-divider>

      <!--配置信息-->
      <el-form-item
          v-for="(i, index) in configList"
          :key="i.id"
          :label="i.label">
        <el-radio-group
            v-model="expert.config"
            size="mini"
            v-for="(child, childIndex) in i.children"
            :key="childIndex"
        >
          <el-radio-button :label="child"></el-radio-button>
        </el-radio-group>
      </el-form-item>

      <el-divider></el-divider>
      <!--个人介绍-->
      <el-form-item
        label="个人介绍"
      >
        <el-input
            type="textarea"
            :rows="2"
            placeholder="请输入内容"
            v-model="expert.introduction">
        </el-input>
      </el-form-item>

      <el-form-item class="form-sub-btn">
        <el-button type="primary" @click="submitForm('ruleForm')">添加</el-button>
        <!--<el-button @click="resetForm('ruleForm')">重置</el-button>-->
      </el-form-item>

    </el-form>

  </div>
</template>
<script>
  export default {
    name: '',
    components: {},
    data() {
      return {
        expert: {
          name: '',
          born: '',
          gender: '',
          config: '',
          introduction: ''
        },
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
      }
    },
    created() {
    },
    mounted() {
    },
    methods: {
      submitForm() {
        console.log('提交')
      }
    }
  }
</script>
<style lang="scss" scoped>
  .p-entry-form {
    //width: 70%;
    max-width: 500px;
    margin: 0 auto;
    .entry-form{

    }
  }
</style>
<style lang="scss">
  .p-entry-form {
    .entry-form{
      .el-form-item__content{
        text-align: left;
      }
    }
    .form-sub-btn{
      .el-form-item__content{
        text-align: center;
        .el-button{
          width: 200px;
        }
      }
    }
  }
</style>

<template>
  <div class="p-login">
    <h2>选择角色登陆</h2>
    <div>
      <el-radio v-model="userCate" label="operator">操作员</el-radio>
      <el-radio v-model="userCate" label="user">普通用户</el-radio>
    </div>
    <div class="p-login-btn">
      <el-button @click="login">登陆</el-button>
    </div>
  </div>
</template>
<script>
  import { mapState, mapMutations } from 'vuex'
  export default {
    name: '',
    components: {},
    data() {
      return {
        userCate: 'operator'
      }
    },
    created() {
      //this.$message({type:"success", message:'xxx'})
      console.log(15, this.userInfo)
    },
    mounted() {
    },
    computed: {
      ...mapState(['userInfo'])
    },
    methods: {
      login() {
        this.setUserInfo({name: this.userCate, isLogin: true, cate: this.userCate})
        this.$router.push({
          path:'/experts'
        })
      },
      ...mapMutations(['setUserInfo'])
    }
  }
</script>
<style lang="scss" scoped>
  .p-login {
    .p-login-btn{
      margin-top: 20px;
    }
  }
</style>

<template>
  <div class="p-login">
    <div>
      <el-radio v-model="userCate" label="operator">操作员</el-radio>
      <el-radio v-model="userCate" label="user">用户</el-radio>
    </div>
    <el-button @click="login">登陆</el-button>
  </div>
</template>
<script>
  import { mapState, mapMutations} from 'vuex';
  export default {
    name: '',
    components: {},
    data() {
      return {
        userCate: ''
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
        console.log(31, this.userCate)
        this.setUserInfo({name: 'aaa', isLogin: true})
      },
      ...mapMutations(['setUserInfo'])
    }
  }
</script>
<style lang="scss" scoped>
  .p-login {
  }
</style>

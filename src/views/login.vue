<template>
  <div class="p-login">
    <el-button @click="login">登陆</el-button>
  </div>
</template>
<script>
  import { mapState, mapMutations} from 'vuex';
  export default {
    name: '',
    components: {},
    data() {
      return {}
    },
    created() {
      this.$message({type:"success", message:'xxx'})
      console.log(15, this.userInfo)
    },
    mounted() {
    },
    computed: {
      ...mapState(['userInfo'])
    },
    methods: {
      login() {
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

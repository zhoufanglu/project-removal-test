<template>
  <div class="p-experts">
    <div class="p-head">
      <el-menu
          :default-active="$route.path"
          class="el-menu-head"
          mode="horizontal"
          @select="handleSelect"
          :router="true"
      >
        <el-menu-item
          v-for="(i,index) in menu.list"
          :index="i.path"
          :key="i.path"
        >{{i.meta.cnName}}</el-menu-item>
      </el-menu>
      <div class="login-info">
        <el-dropdown trigger="click"
        >
          <div class="user-name">
            {{userInfo.name}}<i class="el-icon-arrow-down el-icon--right"></i>
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="go('/login')">退出登陆</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>

    <div class="p-body">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </div>

  </div>
</template>
<script>
  import { mapState } from 'vuex'
  import router from '@/router/index.js'
  export default {
    name: '',
    components: {},
    data() {
      return {
        menu: {
          active: '/experts/list',
          list: []
        }
      }
    },
    computed: {
      ...mapState(['userInfo'])
    },
    created() {
      this.loadMenu()
    },
    mounted() {
    },
    methods: {
      loadMenu() {
        const experts = router.options.routes.find(i => i.name === 'experts')
        this.menu.list = experts.children.filter(i=> {
          return "operator" === this.userInfo.cate
            ? 'listDetail' !== i.name
            : "listDetail" !== i.name && !i.meta.isNeedOperate
        })
      },
      go(path) {
        this.$router.push({path: path})
      },
      handleSelect(key, keyPath) {
        //console.log(51, key, keyPath)
      }
    }
  }
</script>
<style lang="scss" scoped>
  .p-experts {
    .p-head{
      @include vertical-center;
      padding-left: 10px;
      box-shadow: 1px 2px 10px 0 rgba(0, 0, 0, .1);
      .login-info{
        width: 150px;
      }
    }
    .p-body{
      padding: 20px;
    }
  }
</style>

<style lang="scss">
  .p-experts{
    color: #303133;
    .el-menu-head{
      width: calc(100% - 160px);
    }
    .el-menu--horizontal{
      border-bottom: none!important;
    }

    .login-info{
      .user-name{
        cursor: pointer;
      }
    }

  }
</style>

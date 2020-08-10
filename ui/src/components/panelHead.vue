<template>
  <!--每个panel的头部配置-->
  <div class="p-panel-head">
    <span class="title">{{title}}</span>
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: '',
    components: {},
    props: ['title'],
    data() {
      return {}
    },
    created() {

    },
    mounted() {
    },
    methods: {}
  }
</script>
<style lang="scss" scoped>
  .p-panel-head {
    @include vertical-center;
    justify-content: space-between;
    padding: 20px;
    height: 60px;
    box-sizing: border-box;
    background-color: white;
    box-shadow: 0 0 2px #ddd;
    //border: solid 1px red;
    .title{
      font-size: 16px;
      font-weight: bolder;
      letter-spacing: 4px;
    }
  }
</style>

<template>
  <div class="p-name"></div>
</template>
<script>
  export default {
    name: '',
    components: {},
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
  .p-name {
    .p-config-head{
    }
    .p-config-body{
      margin-top: 20px;
      @include panel;
      .p-table-row{
        @include vertical-center;
        justify-content: flex-start;
        border-bottom: 1px dashed #dddddd;
        height: 60px;
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

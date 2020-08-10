<template>
  <div class="p-experts-detail">
    <panelHead
        title="xxx专家详情"
    >
    </panelHead>
    <div class="p-experts-info">
      <entryForm cate="expertsDetail"></entryForm>
    </div>
  </div>
</template>
<script>
  import panelHead from "@c/panelHead.vue"
  import noData from "@c/noData.vue"
  import entryForm from "@c/entryForm.vue"

  import { mapState } from 'vuex'
  export default {
    name: '',
    components: {panelHead, noData,entryForm},
    data() {
      return {}
    },
    computed: {
      ...mapState(['userInfo'])
    },
    created() {
    },
    mounted() {
    },
    methods: {}
  }
</script>
<style lang="scss" scoped>
  .p-experts-detail {
    .p-experts-info{
      @include panel;
      margin-top: 20px;
      width: 100%;
    }
  }
</style>

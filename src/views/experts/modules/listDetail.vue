<template>
  <div class="p-name">
    <panelHead
        title="xxx专家详情"
    >
    </panelHead>
  </div>
</template>
<script>
  import panelHead from "@c/panelHead.vue"
  import noData from "@c/noData.vue"
  import { mapState } from 'vuex'
  export default {
    name: '',
    components: {panelHead, noData},
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
  .p-name {
  }
</style>

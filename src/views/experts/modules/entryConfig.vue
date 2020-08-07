<template>
  <div class="p-entry-config">
    <div class="p-config-head">
      <panelHead
          title="专家录入配置"
      ></panelHead>
    </div>
  </div>
</template>
<script>
  import panelHead from "@c/panelHead.vue"
  export default {
    name: '',
    components: {
      panelHead
    },
    data() {
      return {
        configList: [
          {
            label: '单位性质',
            children: ['基地', '事业单位', '政府单位']
          }
        ]
      }
    },
    created() {
    },
    mounted() {
    },
    methods: {}
  }
</script>
<style lang="scss" scoped>
  .p-entry-config {
    .p-config-head{
    }
  }
</style>

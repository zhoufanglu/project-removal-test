<template>
  <div class="p-entry">
    <panelHead
        title="专家录入"
    >
    </panelHead>
    <div class="p-form-panel">
      <entryForm></entryForm>
    </div>
  </div>
</template>
<script>
  import panelHead from "@c/panelHead.vue"
  import entryForm from "@c/entryForm.vue"
  export default {
    name: '',
    components: {panelHead, entryForm},
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
  .p-entry {
    .p-form-panel{
      //max-width: 1300px;
      margin: 0 auto;
      margin-top: 20px;
      @include panel;
    }
  }
</style>

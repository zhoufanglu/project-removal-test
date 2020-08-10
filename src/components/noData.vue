<template>
  <div class="p-no-data">
    <h2>{{info}}</h2>
  </div>
</template>
<script>
  export default {
    props: ['info'],
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
  .p-no-data {
    height: 200px;
    @include vertical-center;
  }
</style>

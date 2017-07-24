<template>
  <div class="records">
    <Item
      v-for="(record, index) in records"
      :key="index"
      :record="record"
      class="record"
    />
  </div>
</template>

<script>
  import Item from './item.vue'

  export default {
    name: 'records',
    computed: {
      records () {
        return this.$store.state.records.list
      }
    },
    components: { Item }
  }
</script>

<style scoped>
  .records {
    display: flex;
    padding: 20px;
  }

  .record + .record {
    margin-left: 10px;
  }
</style>

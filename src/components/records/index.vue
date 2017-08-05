<template>
  <div class="records">
    <div class="record" v-for="(record, index) in records">
      <Item
        :key="index"
        :record="record"
      />
    </div>
  </div>
</template>

<script>
  import Item from './item.vue'

  export default {
    name: 'records',
    computed: {
      records () {
        return this.$store.state.records.list.sort((a, b) => a.timeRecord - b.timeRecord)
      }
    },
    components: { Item }
  }
</script>

<style scoped>
  .records {
    display: flex;
    padding: 5px;
    margin-top: 20px;
    overflow: auto;
  }

  .record {
    padding: 5px;
  }

  .record + .record {
    margin-left: 5x;
  }
</style>

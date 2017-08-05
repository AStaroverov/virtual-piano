<template>
  <div class="records">
    <div class="item" v-for="(record, index) in records">
      <div>
        <Item
          :key="index"
          :record="record"
        />
      </div>
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

  .item {
    padding: 5px;
  }

  .item + .item {
    margin-left: 5px;
  }
</style>

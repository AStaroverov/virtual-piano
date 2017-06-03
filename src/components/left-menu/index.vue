<template>
  <div class="left-menu">
    <div class="main">
      <div class="source">
        Musical texts
      </div>
    </div>
    <div class="second">
      <div
        v-for="text in musicalTexts"
        v-text="text"
        @click="open(text)"
      />
    </div>
  </div>
</template>

<script>
import musicalTexts from 'constants/musical-texts'

export default {
  name: 'left-menu',
  data: () => ({ musicalTexts }),
  methods: {
    open (text) {
      this.$router.push(`/musical-texts/${text}`)
    }
  }
}
</script>

<style scoped>
.left-menu {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  width: 200px;
  height: 100vh;
  background-color: #fff;
  box-shadow: 0 0 1px rgba(0, 0, 0, .5);
}

.source {
  padding: 10px;
}
</style>

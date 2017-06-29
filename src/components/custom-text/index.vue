<template>
  <div class="box">
    <form v-if="!textCreated" class="form" @submit="onSubmit">
      <textarea name="name" rows="8" cols="80" v-model="text"></textarea>
      <button class="btn save" type="submit" name="submit">Save</button>
    </form>
    <div v-else class="text">
      <pre v-text="text" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'custom-text',
  data: () => ({
    text: '',
    textCreated: false
  }),
  nethods: {
    onSubmit (e) {
      debugger
      e.preventDefault()
      this.textCreated = false
    }
  }
}
</script>

<style scoped>
.box {
  padding: 10px;
}

.form {
  display: flex;
  flex-direction: column;
}

.btn {
  width: 100px;
}

.text {
  width: 100%;
  justify-content: center;
}
</style>

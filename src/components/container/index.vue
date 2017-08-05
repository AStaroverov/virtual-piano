<template>
  <div class="container">
    <BetaBanner class="beta-banner" />

    <MainMenu />

    <div class="piano-container">
      <PianoBlock />
    </div>

    <Recorder />
    <Records />

    <router-view class="auth" name="auth" />
  </div>
</template>

<script>
  import BetaBanner from 'src/components/beta-banner/index.vue'
  import MainMenu from 'src/connects/menu'
  import PianoBlock from 'src/components/piano-block/index.vue'
  import Recorder from 'src/components/recorder/index.vue'
  import Records from 'src/components/records/index.vue'

  export default {
    name: 'container',
    components: { BetaBanner, MainMenu, PianoBlock, Recorder, Records }
  }
</script>

<style scoped>
  .container {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    padding: 10px;
  }

  .beta-banner {
    position: absolute;
    z-index: 1;
    top: 20px;
    left: 0;
    right: 0;
  }

  .piano-container {
    width: 100%;
    height: 400px;
  }

  .row {
    margin: 10px;
  }

  .lower-piano {
    flex-grow: 1;
  }

  .auth {
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    padding: 20px;
  }
</style>

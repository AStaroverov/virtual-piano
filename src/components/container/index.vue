<template>
  <div class="container">
    <BetaBanner class="beta-banner" />

    <MainMenu />

    <div class="center">
      <div class="wrapper black">
        <TrackRoad />
      </div>
      <div class="wrapper">
        <Keyboard />
      </div>
    </div>
    <Recorder />
    <Records />

    <router-view class="auth" name="auth" />
  </div>
</template>

<script>
  import BetaBanner from 'src/components/beta-banner/index.vue'
  import MainMenu from 'src/connects/menu'
  import Keyboard from 'src/components/keyboard/index.vue'
  import TrackRoad from 'src/components/track-road/index.vue'
  import Recorder from 'src/components/recorder/index.vue'
  import Records from 'src/components/records/index.vue'

  export default {
    name: 'container',
    components: { BetaBanner, MainMenu, Keyboard, TrackRoad, Recorder, Records }
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

  .center {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .wrapper {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 0 10px;
  }

  .black {
    background-color: black;
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

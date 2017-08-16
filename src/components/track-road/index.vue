<template>
  <div
    ref="graph"
    class='roads'
  />
</template>

<script>
  import * as buttons from 'src/constants/buttons'
  import { mapColorHexToNoteId } from 'src/constants/note-color'

  import TrackRoad from 'src/graphic/track-road'
  import * as utils from 'src/utils/piano-key'

  export default {
    name: 'track-road',
    props: {
      onKeyup: {
        required: true,
        type: Function
      },
      onKeydown: {
        required: true,
        type: Function
      }
    },
    mounted () {
      this.piano = new TrackRoad({
        container: this.$refs.graph
      })

//      this.piano
    }
  }
</script>

<style scoped>
  .roads {
    width: 100%;
    height: 300px;
    /*transform: scale3d(1, -1, 1);*/
  }
</style>

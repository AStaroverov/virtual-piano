import * as THREE from 'three'
import * as utils from 'src/utils/piano-key'

import Road from './road'

export default class {
  constructor ({ container }) {
    this.container = container

    this.width = null
    this.height = null
    this.whiteButtonWidth = null
    this.blackButtonWidth = null

    this.scene = null
    this.render = null

    this.init()
    this.addRoad()
  }

  init () {
    const width = this.container.offsetWidth
    const height = this.container.offsetHeight

    const camera = new THREE.PerspectiveCamera(15, width / height, 0.1, 5000)
    camera.position.z = 150

    const scene = new THREE.Scene()
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(width, height)

    this.container.appendChild(renderer.domElement)

    function animate () {
      window.requestAnimationFrame(animate)
      renderer.render(scene, camera)
    }
    //
    animate()

    this.width = width
    this.height = height
    this.whiteButtonWidth = utils.getWhiteButtonWidth(width)
    this.blackButtonWidth = utils.getBlackButtonWidth(width)

    this.scene = scene
    this.render = renderer
  }

  addRoad () {
    const road = new Road({
      id: 'asd', //this.createId(button),
      width: 10,
      height: 10,
      length: 20,
      color: 0xffffff,
      edgeColor: 0x000000,
      x: -100
    })
    console.log(road.get())
    this.scene.add(road.get())
  }

  createId (button = {}) {
    return `${button.time}-${button.octaveId}-${button.noteId}`
  }
}

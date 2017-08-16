import * as buttonsConstants from 'src/constants/buttons'

import * as THREE from 'three'
import Button from './button'

import { last, forEach, find } from 'lodash'
import * as utils from 'src/utils/piano-key'

export default class {
  constructor ({ container, buttons }) {
    this.container = container

    this.width = null
    this.height = null
    this.whiteButtonWidth = null
    this.blackButtonWidth = null

    this.scene = null
    this.render = null
    this.buttons = []

    this.init()
    this.addButtons(buttons)
  }

  init () {
    const width = this.container.offsetWidth
    const height = this.container.offsetHeight

    const camera = new THREE.PerspectiveCamera(15, width / height, 0.1, 5000)
    camera.position.y = 450
    camera.position.z = 360
    camera.rotation.x = -0.9

    const scene = new THREE.Scene()
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(width, height)

    this.container.appendChild(renderer.domElement)

    function animate () {
      window.requestAnimationFrame(animate)
      renderer.render(scene, camera)
    }

    animate()

    this.width = width
    this.height = height
    this.whiteButtonWidth = utils.getWhiteButtonWidth(width)
    this.blackButtonWidth = utils.getBlackButtonWidth(width)

    this.scene = scene
    this.render = renderer
  }

  addButtons (buttons) {
    forEach(buttons, this.addButton.bind(this))
    this.toCenter()
  }

  addButton (button) {
    const color = button.typeId === buttonsConstants.WHITE_ID
      ? 0xffffff
      : 0x000000
    const edgeColor = button.typeId === buttonsConstants.WHITE_ID
      ? 0x3e3e3e
      : 0x969696
    const width = button.typeId === buttonsConstants.WHITE_ID
      ? this.whiteButtonWidth
      : this.blackButtonWidth
    const height = button.typeId === buttonsConstants.WHITE_ID
      ? 20
      : 30
    const length = button.typeId === buttonsConstants.WHITE_ID
      ? 150
      : 110

    const buttonGl = new Button({
      id: this.createId(button),
      width,
      height,
      length,
      color,
      edgeColor
    })

    buttonGl.setPosition({
      x: utils.getPosition(button, this.whiteButtonWidth),
      y: button.typeId === buttonsConstants.BLACK_ID ? 12 : 5,
      z: button.typeId === buttonsConstants.BLACK_ID ? -18 : 0
    })

    this.buttons.push(buttonGl)
    this.scene.add(buttonGl.get())
  }

  toCenter () {
    const lastButton = last(this.buttons).get()
    const maxX = lastButton.position.x
    const delta = Math.floor(maxX / 2)

    forEach(this.buttons, btn => {
      const box = btn.get()
      box.position.x = box.position.x - delta
    })
  }

  updateButtons (buttons) {
    forEach(buttons, this.updateButton.bind(this))
  }

  updateButton (button) {
    const id = this.createId(button)
    const buttonGl = find(this.buttons, buttonGl => buttonGl.id === id)

    if (!buttonGl) return

    if (button.isPressed) {
      buttonGl.press()
    } else {
      buttonGl.unpress()
    }
  }

  createId (button) {
    return `${button.octaveId}-${button.noteId}`
  }
}

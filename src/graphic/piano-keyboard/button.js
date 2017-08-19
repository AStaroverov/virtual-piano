import * as THREE from 'three'
import { isNumber } from 'lodash'

export default class {
  constructor ({ id, width, height, length, color, edgeColor, pressColor }) {
    const geometry = new THREE.BoxBufferGeometry(width, height, length)
    const material = new THREE.MeshBasicMaterial({ color })
    const box = new THREE.Mesh(geometry, material)

    const edges = new THREE.EdgesGeometry(box.geometry)
    const edgesMaterial = new THREE.LineBasicMaterial({ color: edgeColor, linewidth: 4 })
    const wireframe = new THREE.LineSegments(edges, edgesMaterial)

    box.add(wireframe)

    this.id = id
    this.box = box
    this.isPressed = false
    this.pressDelta = 10
    this.color = color
    this.pressColor = pressColor
  }
  get () {
    return this.box
  }
  setPosition ({ x, y, z }) {
    isNumber(x) && (this.box.position.x = x)
    isNumber(y) && (this.box.position.y = y)
    isNumber(z) && (this.box.position.z = z)
  }
  press () {
    const { position, material } = this.box

    if (!this.isPressed) {
      this.isPressed = true

      material.color.setHex(this.pressColor)
      position.y -= this.pressDelta
    }
  }
  unpress () {
    const { position, material } = this.box

    if (this.isPressed) {
      this.isPressed = false

      material.color.setHex(this.color)
      position.y += this.pressDelta
    }
  }
}

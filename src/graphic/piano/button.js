import * as THREE from 'three'
import { isNumber } from 'lodash'

export default class {
  constructor ({ id, width, height, length, color, edgeColor }) {
    const geometry = new THREE.BoxBufferGeometry(width, height, length)
    const material = new THREE.MeshBasicMaterial({ color })
    const box = new THREE.Mesh(geometry, material)

    box.rotation.x = 0.7
    box.rotation.y = 0

    const edges = new THREE.EdgesGeometry(box.geometry)
    const edgesMaterial = new THREE.LineBasicMaterial({ color: edgeColor, linewidth: 4 })
    const wireframe = new THREE.LineSegments(edges, edgesMaterial)

    box.add(wireframe)

    this.id = id
    this.box = box
    this.isPressed = false
    this.pressDelta = 10
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
    const { position, rotation } = this.box

    if (!this.isPressed) {
      this.isPressed = true
      position.y -= this.pressDelta
      position.z -= this.pressDelta * rotation.x
    }
  }
  unpress () {
    const { position, rotation } = this.box

    if (this.isPressed) {
      this.isPressed = false
      position.y += this.pressDelta
      position.z += this.pressDelta * rotation.x
    }
  }
}

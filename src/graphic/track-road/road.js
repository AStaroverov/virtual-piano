import * as THREE from 'three'
export default class Road {
  constructor ({ id, width, height, length, color, edgeColor, x }) {
    const geometry = new THREE.BoxBufferGeometry(width, height, length)
    const material = new THREE.MeshBasicMaterial({ color })
    const box = new THREE.Mesh(geometry, material)

    // box.rotation.x = 0.7
    // box.rotation.y = 0
    box.position.x = x

    const edges = new THREE.EdgesGeometry(box.geometry)
    const edgesMaterial = new THREE.LineBasicMaterial({ color: edgeColor, linewidth: 4 })
    const wireframe = new THREE.LineSegments(edges, edgesMaterial)

    box.add(wireframe)

    this.id = id
    this.box = box
  }
  get () {
    return this.box
  }
  move () {
    this.box.position.x += 1
  }
  grow () {
    this.box.scale.z += 0.1
    this.box.position.z += 1

  }
}

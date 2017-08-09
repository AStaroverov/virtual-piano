import PIXI from 'src/pix'

export default class KeyLine extends PIXI.Graphics {
  constructor ({ x = 0, y = 0, width = 0, yDestroy, color = 0xFFFFFF }) {
    super()

    this.startPosition = {
      x: x,
      y: y
    }
    this._width = width
    this.roadHeight = 20
    this.yDestroy = yDestroy
    this.color = color

    this.isGrow = false

    PIXI.ticker.shared.add(this.render)
  }

  startGrow () {
    if (this.isGrow) return

    this.isGrow = !this.isGrow

    PIXI.ticker.shared.remove(this.move)
    PIXI.ticker.shared.add(this.grow)
  }

  stopGrow () {
    if (!this.isGrow) return

    this.isGrow = !this.isGrow

    PIXI.ticker.shared.add(this.move)
    PIXI.ticker.shared.remove(this.grow)
  }

  render = () => {
    const { x, y } = this.startPosition

    const finalY = y + this.roadHeight
    const finalX = x + this._width

    this.clear()

    this.beginFill(0xFFFFFF, 0.5)
    this.moveTo(x, finalY)
    this.lineTo(x, finalY + 1)
    this.lineTo(finalX, finalY + 1)
    this.lineTo(finalX, y)
    this.endFill()

    this.beginFill(this.color)
    this.moveTo(x, y)
    this.lineTo(x, finalY - 1)
    this.lineTo(finalX, finalY - 1)
    this.lineTo(finalX, y)
    this.endFill()
  }

  move = () => {
    if (this.yDestroy <= this.startPosition.y) {
      PIXI.ticker.shared.remove(this.move)
      PIXI.ticker.shared.remove(this.render)

      if (this.graphicsData !== null) {
        this.destroy()
      }
    } else {
      this.startPosition.y += 1
    }
  }

  grow = () => {
    this.roadHeight += 1
  }
}

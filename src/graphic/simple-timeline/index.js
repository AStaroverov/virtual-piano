import PIXI from 'src/pix'

export default class TimeLine extends PIXI.Graphics {
  constructor ({ width, height, duration, color = 0x20a0ff }) {
    super()

    this.started = false
    this.maxX = width
    this.color = color
    this.deltaX = width / duration * 16.66

    this._x = 0
    this._y = height
  }

  start () {
    !this.started && PIXI.ticker.shared.add(this.move)
    this.started = true
  }

  stop () {
    this.started = false
    PIXI.ticker.shared.remove(this.move)
  }

  setPosition (x) {
    this._x = x
    this.render()
  }

  move = (deltaTime) => {
    this._x += this.deltaX * deltaTime

    if (this._x > this.maxX) {
      this._x = this.maxX
      this.stop()
    }

    this.render()
  }

  render = () => {
    this.clear()

    this.beginFill(this.color)
    this.moveTo(0, 0)
    this.lineTo(this._x, 0)
    this.lineTo(this._x, this._y)
    this.lineTo(0, this._y)
    this.endFill()
  }
}

class ConveyorQueue {
  constructor (maxItems) {
    this._q = []
    this._maxItems = maxItems
    this._totalSum = 0
  }

  get totalSum () {
    return this._totalSum
  }

  shift (shiftedNum) {
    if (shiftedNum >= this._maxItems) {
      this._q = [] // clear the queue
      this._totalSum = 0
      return
    }

    while (shiftedNum > 0) {
      this._q.push(0)
      shiftedNum--
    }

    while (this._q.length > this._maxItems) {
      this._totalSum -= this._q.shift()
    }
  }

  addToBack (count) {
    if (this._q.length === 0) {
      this._q.push(count)
    }
    this._totalSum += count
  }
}

module.exports = ConveyorQueue

class Event {
  constructor (count, time) {
    this._count = count
    this._time = time
  }

  get count () {
    return this._count
  }

  get time () {
    return this._time
  }
}

class MinuteHourCounter {
  consturctor () {
    this._events = []
  }

  add (count) {
    this._events.push(new Event(count, Date.now()))
  }

  minuteCount () {

  }

  hourCount () {}
}

module.exports = MinuteHourCounter

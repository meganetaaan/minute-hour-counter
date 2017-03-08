const TrailingBucketCounter = require('./TrailingBucketCounter');

class MinuteHourCounter {
  constructor(option) {
    if(option != null && typeof option.speedRatio === 'number') {
      this._speedRatio = option.speedRatio;
    }
    this._minuteCounts = new TrailingBucketCounter(60, 1);
    this._hourCounts = new TrailingBucketCounter(60, 60);
  }

  add(count) {
    const now = this._now();
    this._minuteCounts.add(count, now);
    this._hourCounts.add(count, now);
  }

  minuteCount() {
    const now = this._now();
    return this._minuteCounts.trailingCount(now);
  }

  hourCount() {
    const now = this._now();
    return this._hourCounts.trailingCount(now);
  }

  _now() {
    return Date.now() * this._speedRatio / 1000;
  }
}

module.exports = MinuteHourCounter;

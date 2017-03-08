const ConveyorQueue = require('./ConveyorQueue');
console.log(ConveyorQueue);

class TrailingBucketCounter {
  constructor(bucketNum, secsPerBucket) {
    this._buckets = new ConveyorQueue(bucketNum);
    this._secsPerBucket = secsPerBucket;
    this._lastUpdateTime = null;
  }

  update(now) {
    const currentBucket = now / this._secsPerBucket;
    const lastUpdateBucket = this._lastUpdateTime / this._secsPerBucket;

    this._buckets.shift(currentBucket - lastUpdateBucket);
    this._lastUpdateTime = now;
  }

  add(count, now) {
    this.update(now);
    this._buckets.addToBack(count);
  }

  trailingCount(now) {
    this.update(now);
    return this._buckets.totalSum;
  }
}

module.exports = TrailingBucketCounter;

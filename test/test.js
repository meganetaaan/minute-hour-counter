const MinuteHourCounter = require('../src/MinuteHourCounter');

function sleep (ms = 0) {
  return new Promise(r => setTimeout(r, ms));
}

const mhc = new MinuteHourCounter({speedRatio: 1000});
mhc.add(5);

sleep(0).then(() => {
  console.log(`0 seconds minuteCount: ${mhc.minuteCount()}, hourCount: ${mhc.hourCount()}`);
  return sleep(30);
}).then(() => {
  console.log(`30 seconds minuteCount: ${mhc.minuteCount()}, hourCount: ${mhc.hourCount()}`);
  return sleep(30);
}).then(() => {
  console.log(`60 seconds minuteCount: ${mhc.minuteCount()}, hourCount: ${mhc.hourCount()}`);
});

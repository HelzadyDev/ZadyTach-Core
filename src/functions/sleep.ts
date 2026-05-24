import { setTimeout } from 'node:timers/promises';
import { withProperties } from '#functions';

async function baseSleep(time: number, value: any) {
  await setTimeout(time);
  return typeof value === "function" ? value() : value;
}
const sleep = withProperties(baseSleep, {
  async seconds(time: number, value: any) {
    return sleep(time * 1e3, value);
  },
  async minutes(time: number, value: any) {
    return sleep.seconds(time * 60, value);
  },
  async hours(time: number, value: any) {
    return sleep.minutes(time * 60, value);
  }
});

export { sleep };
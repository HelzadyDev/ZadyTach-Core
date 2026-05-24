import { withProperties } from '#functions';

const timeUnits = Object.freeze({
  seconds: (value: number) => value * 1e3,
  minutes: (value: number) => timeUnits.seconds(value * 60),
  hours: (value: number) => timeUnits.minutes(value * 60),
  days: (value: number) => timeUnits.hours(value * 24)
});

function toMsFunc(value: number, unit: keyof typeof timeUnits = "seconds") {
  return timeUnits[unit](value);
}

const toMs = withProperties(toMsFunc, timeUnits);

export { toMs };
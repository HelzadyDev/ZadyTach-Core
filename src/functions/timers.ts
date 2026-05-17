function createInterval(options: { time: number; run: (stop: () => void) => void; immediately?: boolean }) {
  const { time, run, immediately } = options;
  if (immediately)
    run(() => {
    });
  const timer = setInterval(() => {
    run(() => clearInterval(timer));
  }, time);
  return { timer, stop: () => clearInterval(timer) };
}
function createTimeout(options: { delay: number; run: () => void }) {
  const { delay, run } = options;
  const timer = setTimeout(() => run(), delay);
  return { timer, stop: () => clearTimeout(timer) };
}
function createLoopInterval(options: { run: (item: any, stop: () => void, lap: number, array: any[]) => void; time: number; array: any[]; immediately?: boolean }) {
  const { run, time, array, immediately } = options;
  let lap = 0;
  let loop = 0;
  return createInterval({
    immediately,
    time,
    run(stop) {
      if (loop === array.length) {
        lap++;
        loop = 0;
      }
      run(array[loop], stop, lap, array);
      loop++;
    }
  });
}

export { createInterval, createLoopInterval, createTimeout };
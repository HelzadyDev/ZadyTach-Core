function withProperties(fn: Function, props: { [key: string]: any }) {
  return Object.assign(fn, props);
}
function withTimeout(promise: Promise<any>, time: number, fallback?: any) {
  const timeout = new Promise(
    (resolve) => setTimeout(() => resolve(fallback ?? null), time)
  );
  return Promise.race([promise, timeout]);
}

export { withProperties, withTimeout };


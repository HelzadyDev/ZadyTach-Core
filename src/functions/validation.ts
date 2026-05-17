function isEmail(email: string) {
  return new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/).test(email);
}
function isUrl(url: string) {
  return new RegExp(/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/).test(url);
}
function isNumeric(text: string) {
  return new RegExp(/^\d+$/).test(text);
}
function isDefined(value: any) {
  return value !== null && value !== void 0;
}
function isPromise(value: any) {
  return typeof value === "object" && value !== null && typeof value.then === "function";
}

export { isDefined, isEmail, isNumeric, isPromise, isUrl };

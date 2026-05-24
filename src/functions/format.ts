import { isDefined } from '#functions';

function joinBuilder(separator: string, ...text: (string | undefined | null)[]) {
  return text.flat(Infinity).filter(isDefined).filter((bol): bol is string => typeof bol === "string").join(separator);
}
function notFound(value: any) {
  return value !== null ? value : void 0;
}
function brBuilder(...text: (string | undefined | null)[]) {
  return joinBuilder("\n", ...text);
}
function spaceBuilder(...text: (string | undefined | null)[]) {
  return joinBuilder(" ", ...text);
}
function replaceText(text: string, replacements: { [key: string]: string | Function }) {
  const keys = Object.keys(replacements);
  if (keys.length === 0)
    return text;
  keys.sort((a, b) => b.length - a.length);
  const pattern = new RegExp(
    keys.map((str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|"),
    "g"
  );
  return text.replace(pattern, (match) => {
    const value = replacements[match];
    return typeof value === "function" ? value(match) : value;
  });
}
function capitalize(word: string, allWords: boolean = false) {
  word = word.trim();
  if (!word)
    return word;
  return allWords ? word.split(" ").map((w) => w[0].toUpperCase() + w.slice(1).toLowerCase()).join(" ") : word[0].toUpperCase() + word.slice(1).toLowerCase();
}
function limitText(text: string, maxLength: number, endText: string = "") {
  return text.length >= maxLength ? text.slice(0, maxLength) + endText : text;
}

export { brBuilder, capitalize, joinBuilder, limitText, notFound, replaceText, spaceBuilder };
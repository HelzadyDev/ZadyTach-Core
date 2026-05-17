function hexToRgb(color: string): number {
  return Number.parseInt(color.startsWith("#") ? color.slice(1) : color, 16);
}
function rgbToHex(rgb: number, includeHash: boolean = true): string {
  const hexValue = rgb.toString(16);
  const hexColor = hexValue.padStart(6, "0");
  return includeHash ? `#${hexColor}` : hexColor;
}

export { hexToRgb, rgbToHex };
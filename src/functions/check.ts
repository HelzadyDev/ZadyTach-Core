function equalsIgnoreCase(text1: string, text2: string): boolean {
  return text1.toLowerCase() === text2.toLowerCase();
}

function includesIgnoreCase(text: string, query: string): boolean {
  return text.toLowerCase().includes(query.toLowerCase());
}

export { equalsIgnoreCase, includesIgnoreCase };
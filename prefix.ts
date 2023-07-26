function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) {
    return "";
  }

  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 0; j < strs.length; j++) {
      if (strs[0][i] !== strs[j][i]) {
        return strs[0].slice(0, i);
      }
    }
  }

  return strs[0];
}
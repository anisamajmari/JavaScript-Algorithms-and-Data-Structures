function isSubsequence(str1, str2) {
  let j = 0;
  for (let i = 0; i < str1.length; ) {
    if (str1[i] === str2[j]) {
      i++;
      j++;
    } else {
      j++;

      if (j === str2.length) {
        return false;
      }
    }
  }
  return true;
}

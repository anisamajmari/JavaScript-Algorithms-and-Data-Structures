function sameFrequency(int1, int2) {
  let str1 = int1.toString();
  let str2 = int2.toString();
  if (str1.length !== str2.length) {
    return false;
  }

  for (let i = 0; i < str1.length; i++) {
    const ch = str1[i];
    const index = str2.indexOf(ch);

    if (index === -1) {
      return false;
    }
    str2 = str2.replace(ch, "");
  }

  return true;
}

sameFrequency(182, 281); // true
sameFrequency(34, 14); // false
sameFrequency(3589578, 5879385); // true
sameFrequency(22, 222); // false

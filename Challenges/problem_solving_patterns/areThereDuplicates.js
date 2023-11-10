function areThereDuplicates(...args) {
  args.sort();
  let i = 0;

  for (let j = 1; j < args.length; j++) {
    if (args[i] === args[j]) {
      return true;
    } else {
      i++;
    }
  }
  return false;
}

areThereDuplicates(3, 4, 9, 2, 2, 11); // true
areThereDuplicates(1, 2, 2); // true
areThereDuplicates("a", "b", "c", "a"); // true
areThereDuplicates(2, 5, 6, 4, 2, 6, 7, 8, 5, 4, 3, 3); // true

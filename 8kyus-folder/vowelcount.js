// Vowel Count

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// FUNDAMENTALSSTRINGSUTILITIES

function getCount(str) {
  //   var vowelsCount = 0;

  // enter your majic here
  return str.split("").reduce((acc, cur) => {
    return cur === "a" ||
      cur === "e" ||
      cur === "i" ||
      cur === "o" ||
      cur === "u"
      ? (acc += 1)
      : (acc += 0);
  }, 0);

  //   return vowelsCount;
}

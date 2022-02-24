// Fake Binary

// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

// FUNDAMENTALSSTRINGSARRAYS

function fakeBin(x) {
  x = x.split("");
  let arr = x;
  arr.map((ele, i) => {
    Number(ele) < 5 ? x.splice(i, 1, 0) : x.splice(i, 1, 1);
  });
  return x.join("");
}

// Well of Ideas - Easy Version

// Fork|Collect|
// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

// REFACTORINGFUNDAMENTALSARRAYSSTRINGS

function well(x) {
  let sum = x.reduce((acc, cur) => {
    return cur === "bad" ? acc : (acc += 1);
  }, 0);
  if (sum === 0) {
    return "Fail!";
  } else if (sum > 2) {
    return "I smell a series!";
  } else {
    return "Publish!";
  }
}

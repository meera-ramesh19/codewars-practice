//Exclamation marks series #2: Remove all exclamation marks from the end of sentence
//
// Description:
// Remove all exclamation marks from the end of sentence.

// Examples
// remove("Hi!") === "Hi"
// remove("Hi!!!") === "Hi"
// remove("!Hi") === "!Hi"
// remove("!Hi!") === "!Hi"
// remove("Hi! Hi!") === "Hi! Hi"
// remove("Hi") === "Hi"

function remove(string) {
  let n = string.length;
  string = string.split("");
  while (string[n - 1] === "!") {
    string.pop();
    n = n - 1;
  }
  return string.join("");
}

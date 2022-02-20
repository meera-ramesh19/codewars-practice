// ASCII Total

// You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all ASCII characters.

// examples:

// uniTotal("a") == 97 uniTotal("aaa") == 291

// FUNDAMENTALS

function uniTotal(string) {
  // total up dem unicodes!
  return string.split("").reduce((acc, cur) => acc + cur.charCodeAt(), 0);
}

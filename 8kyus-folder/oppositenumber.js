// Opposite number

// Very simple, given an integer or a floating-point number, find its opposite.

// Examples:

// 1: -1
// 14: -14
// -34: 34
// FUNDAMENTALS

function opposite(number) {
    //your code here
    if(!isNaN(Math.sign(number)))
       { return number*-1}
    return number
   }

   
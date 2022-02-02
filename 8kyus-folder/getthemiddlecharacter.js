
// Get the Middle Character

// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"
// #Input

// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

// #Output

// The middle character(s) of the word represented as a string.

// FUNDAMENTALSSTRINGS




function getMiddle(s){ 
    let index=0
    let sliced=''
    //Code goes here!
    
   if(s.length % 2 !== 0){ 
      index=parseInt(s.length/2)
     
      sliced=s.slice(index,index+1)
    }else if (s.length%2===0){
      index=s.length/2
      sliced=s.slice(index-1,index+1)
    }else{
      return s
    }
    return sliced
  }
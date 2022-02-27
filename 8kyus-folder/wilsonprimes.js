// Wilson primes

// Wilson primes satisfy the following condition. Let P represent a prime number.

// Then ((P-1)! + 1) / (P * P) should give a whole number.

// Your task is to create a function that returns true if the given number is a Wilson prime.

// ALGORITHMSMATHEMATICSNUMBERSFUNDAMENTALS




function amIWilson(p) {
    let wilsonPrime=0
    // check if prime is Wilson
    let num=p-1
    var result = num;
    if (num === 0 || num === 1) 
      return 1; 
    while ( num> 1) { 
      num--;
      result *= num;
    }
    
  wilsonPrime=(result+1)/(p**2)
  return Number.isInteger(wilsonPrime)
  }
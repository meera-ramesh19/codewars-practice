
// Century From Year

// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20
// FUNDAMENTALSNUMBERSMATHEMATICSALGORITHMSBASIC LANGUAGE FEATURESDATES/TIME


function century(year) {
    // Finish this :)
    let numbers=0
    let str=year.toString()
    year=year/100
    
    if(str.length<3) {return 1}
     
     numbers=Math.floor(year)===year?year:Math.floor(year)+1
  
    return numbers
    
  }


  //or

  function century(year) {
    // Finish this :)
    return Math.ceil(year/100)
  }
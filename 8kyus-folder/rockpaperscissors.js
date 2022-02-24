// Rock Paper Scissors!

// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples:

// rps('scissors','paper') // Player 1 won!
// rps('scissors','rock') // Player 2 won!
// rps('paper','paper') // Draw!
// rockpaperscissors

// FUNDAMENTALS




const rps = (p1, p2) => {
    let winner=0
    if(p1==='scissors'&& p2==='rock'){
      winner=2
    }
    else if(p1==='rock'&& p2==='scissors'){
      winner=1
    }else if(p1==='scissors'&& p2==='rock'){
      winner=1
    }else if(p1==='paper'&& p2==='scissors'){
      winner=2
    }else if(p1==='scissors'&& p2==='paper'){
      winner=1
    }else if(p1==='paper'&& p2==='rock'){
      winner=1
    } else if(p1==='rock'&& p2==='paper'){
      winner=2
    } 
      if(winner===0) {
        return 'Draw!'
      }else{ return `Player ${winner} won!`}
  };
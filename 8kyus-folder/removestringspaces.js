


// Remove String Spaces

// Simple, remove the spaces from the string, then return the resultant string.

// FUNDAMENTALSSTRINGSARRAYS


function noSpace(x){
    let newString=''
    x=x.split(' ')
     for(let i=0;i<x.length;i++){
       if(x[i]!=='') newString+=x[i]
     }
    return x.join('')
   }

Sum of positive

You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.

FUNDAMENTALSARRAYSNUMBERS




function positiveSum(arr) {
    let sum=0
    if(arr.length<=0){ return 0}
    arr.map((ele)=>{
      sum+=ele > 0 ?ele:0
   
      })
      return sum
  }
//Complete the aVeryBigSum function in the editor below. It must return the 
//sum of all array elements.

//aVeryBigSum has the following parameter(s):

//int ar[n]: an array of integers .

function aVeryBigSum(ar) {
    let sum = 0;
    for(var i = 0; i < ar.length; i++){
        sum += ar[i];
        
    }
    return sum;


}
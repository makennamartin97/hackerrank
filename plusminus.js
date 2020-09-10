//Given an array of integers, calculate the ratios of its elements that are 
//positive, negative, and zero. Print the decimal value of each fraction on 
//a new line with  places after the decimal.

//Print the ratios of positive, negative and zero values in the array. Each
//value should be printed on a separate line with  digits after the decimal.
//The function should not return a value.

// Complete the plusMinus function below.
function plusMinus(arr) {
    let pos = 0;
    let neg = 0;
    let zero = 0;
    for(var i = 0; i <= arr.length; i++){
        if(arr[i] > 0){
            pos++;
        }
        if(arr[i]<0){
            neg++;
        }
        if(arr[i] == 0){
            zero++;
        }
    }
    console.log(pos/arr.length);
    console.log(neg/arr.length);
    console.log(zero/arr.length);


}
console.log(plusMinus([4, 6, -2, -23, 0, 0, -8, -9, -20]));
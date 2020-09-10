//You are in charge of the cake for a child's birthday. You have decided the 
//cake will have one candle for each year of their total age. They will only 
//be able to blow out the tallest of the candles. Count how many candles are
// tallest.

//ex:
//candles = [4,4,1,3]
//the max height of the candles is 4, and there are 2 of those = 4, so return 2

/*
 * Complete the 'birthdayCakeCandles' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 */

function birthdayCakeCandles(candles) {
    // Write your code here
    let count = 0;
    let max = candles[0];
    for(var i = 0; i <= candles.length; i++){

        if(candles[i] > max){
            max = candles[i];
            count = 0;
        }
        if(candles[i] == max){
            count++;
        }

    }
    return count;
}
console.log(birthdayCakeCandles([6, 6, 4, 3, 9, 6]));

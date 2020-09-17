//regex
////Task

//You have a test string S Your task is to match the pattern Xxxxx.
//Here, x denotes a word character, and X denotes a digit.
//S must start with a digit X and end with . symbol.
// S should be 6 characters long only.

//Note

//This is a regex only challenge. You are not required to write code.
//You have to fill the regex pattern



var Regex_Pattern = /^\d.....$/; 
var test = "8sutb8"
console.log(!!test.match(Regex_Pattern));
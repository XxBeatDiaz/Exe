//1
// const doubleValu = arr => arr.map(num => num * 2);
// let numArr = [2,3,1,2,3];
// let newNumArr = doubleValu(numArr)
// console.log(newNumArr);


//2
// const onlyEvenValues = arr => arr.filter(num => num % 2 === 0);
// let numArr = [2,3,1,2,3,4,8,7,9];
// let newNumArr = onlyEvenValues(numArr);
// console.log(newNumArr);


//3
// const showFirstAndLast = arr => {
//     let result = [];
//     if (typeof arr[0] === "string") {
//         result.push(arr[0]);
//     }
//     if (typeof arr[arr.length - 1] === "string") {
//         result.push(arr[arr.length - 1])
//     }
//     return result;
// }

// let strArr = ["a", 2,3,"cv","sdf"];
// let newStrArr = showFirstAndLast(strArr);
// console.log(newStrArr);


//4
// const vowelCount = str => {
//     let vowel = ["a","i","e","o","u"];
//     let count = 0;

//     str.split("").forEach( char => {
//         if (vowel.includes(char.toLowerCase())) {
//             count++;
//         }
//     });    
//     return count;    
// }

// let str = "Love your self";
// let count = vowelCount(str);
// console.log(count);


//You can make it also with forEach func loop but that more shorter
//5
// let capitalize = str => {
//     let newStr = str.toUpperCase()
//     return newStr;
// }

// let str = "Love your self";
// let newStr = capitalize(str);
// console.log(newStr);


//6
// let shiftLetters = str => {
//     let newStr = "";
//     let code = 0; 

//     str.split("").map(char =>{
//         if (char === " ") {
//             newStr += char;
//         }
//         else{
//             code = char.charCodeAt(0) - 1;
//             newStr += String.fromCharCode(code);
//         }
//     })
//     return newStr;
// }

// let str = "Love your self";
// let newStr = shiftLetters(str);
// console.log(newStr);


//7
// let swapCase = str => {
//     let newStr = "";

//     str.split(" ").map((word, i) => {
//         if (i === 0) {
//             newStr += word;
//         }
//         else if(i % 2 !== 0){
//             newStr += " " + word.toUpperCase();// You can use func number 5 also
//         }
//         else if(i % 2 === 0){
//             newStr += " " + word;
//         }
//     })
//     return newStr;
// }

// let str = "Love your self and your parents";
// let newStr = swapCase(str);
// console.log(newStr);
//1
// let num = 58423;
// let sum = 0;

// for (let digit of num.toString()) 
// {
//   sum += Number(digit); 
// }
// console.log(`Sum is: ${sum}`);


// 2
// let input = 4;
// let temp = "";
// for (let i = 1; i <= input; i++) 
// {
//     temp += "*";
//     console.log(temp);   
// }


//3
// let num1 = 1;
// let num2 = 2;
// let num3 = 3;
// let num4 = 4;
// let num7 = 7;

// let max = num1;
// if (num2 > max) 
// {
//     max = num2
// }

// if (num3 > max)
// {
//     max = num3;
// }

// if (num4 > max) 
// {
//     max = num4;  
// }

// if (num7 > max) 
// {
//     max = num7;    
// }

// console.log(max);


//4
// let num = 34892;
// let strNum = num.toString();
// console.log(strNum.length);


//5
// let start = 4;
// let end = 47;
// for (let i = start; i <= end; i++) 
// {
//     if(i % 2 === 0)
//     {
//         console.log(i);   
//     }   
// }


//6
// let input = 1234;
// let reversed = 0;
// while (input > 0) 
// {
//     let temp = input % 10
//     reversed = (reversed * 10) + temp; 
//     input = Math.floor(input /10);
// }
// console.log(reversed);


//7
// let input = 5;
// for (let i = 1; i <= input; i++) 
// {
//     console.log(`${i}`.repeat(i));   
// }


//8
// let input = 121121;
// let strInput = input.toString();
// let strLen = strInput.length;
// let result = ""
// for (let i = 0; i < strLen; i++) 
// {
//     if (strInput[i] !== strInput[strLen - 1 - i]) 
//     {
//         result = "Not a Palindrome";
//         break;
//     }   
//     result = "Palindrome";
// }
// console.log(result);


//9
// let num = 4;
// for (let i = 1; i <= 10; i++) 
// {
//     console.log(num * i);      
// }


//10
// let input = 3;
// while (input !== 1) 
// {
//     if (input % 2 === 0) 
//     {
//         input /= 2; 
//     }
//     else if (input % 2 === 1) 
//     {
//         input = (input * 3) + 1 
//     }
//     console.log(input);  
// }



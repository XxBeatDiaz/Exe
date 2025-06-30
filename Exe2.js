//1
// let a = "some all string";
// let b = "other bll string";
// a += b;
// b = a.substring(0 ,a.length - b.length)
// a = a.substring(a.length - b.length -1, a.length);
// console.log(a,b);


//2
// let grid = 
// [
//   ['X', 'O', 'x', ' ', 'X'],
//   [' ', 'x', 'O', 'X', ' '],
//   ['X', 'X', 'X', 'x', 'O'],
//   ['x', ' ', 'X', 'O', ' '],
//   ['O', ' ', 'x', ' ', 'X']
// ];

// let counter = 0;
// for (let i = 0; i < grid.length; i++) 
// {
//     for (let j = 0; j < grid[i].length; j++) 
//     {
//         if (grid[i][j] === "X") 
//         {
//             console.log(`Found at: ${i},${j}`);
//             counter++;
//         }
//     } 
// }


//3
// let family = 
// {
//     parents: {},
//     children: 
//     [
//         { name: "Ali" },
//         { name: "Lea" },
//         { name: "Mona" }
//     ]
// };

// let thirdChild = family.children[2].name;
// let allChild = family.children;
// let allNames = "";
// console.log(thirdChild);
// for (let i = 0; i < allChild.length; i++) 
// {
//     allNames += allChild[i].name;
//     if (i < allChild.length - 1) 
//     {
//         allNames += ", ";
//     }
// }
// console.log(allNames);


//4
// let array = [1, 2, 3, 4]
// let numArr = [];
// for (let i = array.length - 1; i >= 0; i--) 
// {
//     numArr.push(array[i]);   
// }
// console.log(numArr);


//5
// let mixedArray = 
// [
//   42,     
//   23,
//   2,                   
//   "hello",                   
//   true, 
//   true,
//   false,                     
//   null,                      
//   { name: "Alice" }, 
//   { fruit: "Mango" }        
// ];

// let countStr = 0;
// let countInt = 0;
// let countObj = 0;
// let countBool = 0;
// let countNull = 0;


// for (let i = 0; i < mixedArray.length; i++) 
// {
//     let item = mixedArray[i];

//     if (typeof item === "string") 
//     {
//         countStr++;
//     }  
//     else if (typeof item === "number") 
//     {
//         countInt++;
//     }  
//     else if (typeof item === "boolean") 
//     {
//         countBool++;
//     }  
//     else if (item === null) 
//     {
//         countNull++;
//     }  
//     else if (typeof item === "object") 
//     {
//         countObj++;
//     }
// }

// console.log
// (`
// str: ${countStr}, 
// int: ${countInt}, 
// obj: ${countObj}, 
// null: ${countNull}, 
// bool: ${countBool}
// `);


//6
// let numArray = [3, 23, 123, 908, 7, 80, 2, 0, 100, 490];
// let newNumArray = [];
// let counter = 0;
// for (let i = 0; i < numArray.length; i++) 
// {
//     counter++;
//     if (numArray[i] >= 100) 
//     {
//         newNumArray.push(numArray[i])
//     }
// }
// console.log
// (`
// old array: ${numArray}. 
// new array: ${newNumArray}. 
// comparisons: ${counter}.
// `);


//7
// let evenOrOdd = {Even: [], Odd: []};
// counter = 0;
// for (let i = 0; i <= 50; i++) 
// {
//     if (i % 2 === 0) 
//     {
//         evenOrOdd.Even.push(i);
//     }
//     else if (i % 2 !== 0) 
//     {
//         evenOrOdd.Odd.push(i);
//     }  

//     if (i % 2 === 0 && i % 3 === 0 && i !== 0) 
//     {
//         console.log(i);     
//         counter++;
//     }
// }
// console.log
// (`
// even: ${evenOrOdd.Even}.
// odd: ${evenOrOdd.Odd}.
// amount of dividers by 2 and 3: ${counter}.
// `);


//8

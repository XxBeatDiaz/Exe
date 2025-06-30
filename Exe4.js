//1
// function createCounter(){
//     let counter = 1;

//     return function(){
//        let num = counter++;
//        return num;
//     }
// }

// const counter = createCounter()
// console.log(counter()); // 1
// console.log(counter()); // 2
// console.log(counter()); // 3


//2
// function secretHolder(secret){
//     const obj = {
//         getSecret: () => secret,
//         setSecret: (_newSecret) => {
//             secret = _newSecret;
//         }
//     }   
//     return obj;
// }

// const mySecret = secretHolder("abc");
// console.log(mySecret.getSecret()); // abc;
// mySecret.setSecret("123");
// console.log(mySecret.getSecret()); // 123;


//3
// function buildFunctions() {
//     const arr = [];

//     for (let i = 0; i < 3; i++) {
//         arr.push(function () {
//         console.log(i);
//     });
// }
// return arr;
// }

// const funcs = buildFunctions();
// funcs[0](); // should print 0
// funcs[1](); // should print 1
// funcs[2](); // should print 2
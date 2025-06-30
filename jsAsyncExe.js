//1
// import fs from "fs";

// fs.readFile("./aaa.txt", (err, data) => {
//     if (err) {
//         console.log("err");
//         return
//     }
//     const d = data;

//     fs.stat("./aaa.txt", (err, stats) => {
//         if (err) {
//             console.log("err");
//             return
//         }
//         console.log("\nfile info: ");
//         console.log(stats.size);
//         console.log(stats.birthtime);
//     });
// });


//2
// import fs from "fs";
// import path from "path";

// fs.readdir("./Folder", "utf-8", (err, files) => {
//     if (err) {
//         console.log("err");
//         return;
//     }
//     files.forEach(file => {
//         const fullPath = path.join("./Folder", file);

//         fs.stat(fullPath, (err, stats) => {
//             if (err) {
//                 console.log("err");
//                 return;
//             }
//             if (stats.isFile()) {
//                 console.log(file);
//             }
//         })
//     });
// })


//3
// const counterDown = function (count) {
//     if (count <= 0) {
//         console.log("end");
//         return;
//     }

//     console.log(count);
//     setTimeout(() => {
//         counterDown(count - 1);
//     }, 1000)
// }

// counterDown(4);

//4
// import fs from "fs";


// fs.readFile("./quotes.txt", "utf-8", (err, data) => {
//     if (err) {
//         console.log("err");
//         return;
//     }
//     const d = data.split("\n");
//     const random = Math.floor(Math.random() * d.length);
//     console.log(d[random]);
// })


//5
// import os from "os";

// const freeMem = function (logs) {
//     const interval = setInterval(() => {
//         const total = os.totalmem();
//         const free = os.freemem();
//         const percentage = ((free / total) * 100).toFixed(2);
//         console.log(`Free memory: ${percentage}%`);

//         logs -= 1;
//         if (logs <= 0) {
//             clearInterval(interval);
//             console.log("Memory loggin complete.");
//         }
//     }, 1000)
// }

// freeMem(4);




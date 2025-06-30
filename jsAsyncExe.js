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
//     files.forEach(file => {
//         const fullPath = path.join("./Folder", file);

//         fs.stat(fullPath, (err, stats) => {
//             if (stats.isFile()) {
//                 console.log(file);   
//             }
//         })
//     });
// })
//1
// const users = [
// { name: "Alice", stats: { score: 88 } },
// { name: "Bob", stats: { score: 95 } },
// { name: "Charlie", stats: { score: 72 } },
// ];

// users.sort((a,b) => b.stats.score - a.stats.score);
// console.log(users);


//2
// const numbers = [1, 2, 3, 4, 3, 2, 5, 6, 4];

// const seen = new Set;
// const duplicates = new Set;

// for (const num of numbers) {
//     if (seen.has(num)) {
//         duplicates.add(num);
//     }
//     else{
//         seen.add(num);
//     }
// }
// console.log(duplicates);


//3
// function groupByProperty(arr){
//     const grouped = {};
    
//     for (const obj of data) {
//         const key = obj.type;
        
//         if (!grouped[key]) {
//             grouped[key] = [];
//         }
//         grouped[key].push(obj)
//     }
//     return grouped;
// }

// const data = [
//   { name: "Apple", type: "fruit" },
//   { name: "Carrot", type: "vegetable" },
//   { name: "Banana", type: "fruit" },
// ];

// const grouped = groupByProperty(data);
// console.log(grouped);


//4
// const person = {
//     name: "Alice",
//     address: {
//         city: "Tel Aviv",
//         zip: 12345
//     }
// };

// const newPerson = structuredClone(person);
// newPerson.address.city = "Jerusalem";
// console.log(newPerson);

//1
// class Phone{
//     constructor(brand, model){
//         this.brand = brand;
//         this.model = model;
//     }

//     details = function () {
//         console.log(`Phone: ${this.brand} ${this.model}`);    
//     }
// }

// const a = new Phone("Samsung", "S22");
// a.details();


//2
// class Rectangle{
//     constructor(width, height){
//         this.width = width;
//         this.height= height;
//     }

//     area = function(){
//         let result = this.width * this.height;
//         return result;
//     }
// }

// const a = new Rectangle(5,4);
// console.log(a.area());


//3
// class BankAccount{
//     constructor(owner, balance){
//         this.owner = owner;
//         this.balance = balance;
//     }

//     deposit = function(amount){
//         this.balance += amount;
//     }

//     withdraw = function(amount){
//         if (this.balance - amount > 0) {
//             this.balance -= amount;
//         }
//     }

//     checkBalance = function(){
//         console.log(`Balance: ${this.balance}`);   
//     }
// }

// const a = new BankAccount("Avi", 1000);
// a.checkBalance();
// a.deposit(1500);
// a.checkBalance();
// a.withdraw(1300);
// a.checkBalance();


//4 not done
// function Animal(name){
//     this.name = name;

//     this.speak = function(){
//         return `${this.name}: Makes a sound`
//     }
// }

// function Dog(name){
//     this.name = name;

//     this.bark = function(){
//         return `${this.name}: Bark Bark`
//     }
// }


// const dog = new Dog("Reksi");
// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;



// console.log(dog.name);
// console.log(dog.speak);
// console.log(dog.bark);



//7
// class Book{
//     constructor(title, author){
//         this.title = title;
//         this.author = author;
//     }

//     info = function(){
//         return `Author: ${this.author}. Title: ${this.title}`
//     }
// }

// const a = new Book("Hgiveret im hsafam", "The big boy");
// console.log(a.info());
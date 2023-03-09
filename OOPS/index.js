// // Factory function
// function createCircle(radius) {
//   return {
//     radius,
//     tryMe: function () {
//       console.log("Hi", radius);
//     },
//   };
// }

// const circle = createCircle(5);

// console.log(circle.tryMe());

// // Constructor function

// function Circle(radius) {
//   this.radius = radius;
//   this.tryMe = function () {
//     console.log("hi", radius);
//   };
// }
// const circle2 = new Circle(10);

// console.log("2", circle2.tryMe());

// const temp = new Function(
//   "radius",
//   `this.radius = radius;
//   this.tryMe = function () {
//     console.log("hi", radius);
//   };`
// );
// const tempFunc = new temp(15);

// console.log("temp", tempFunc.tryMe());

//class

// class testing {
//   constructor() {
//     this.id = 101;
//     this.name = "Tarun";
//   }
// }

// const Testing_1 = new testing();
// console.log([Testing_1.id, Testing_1.name]);

// class TestingChild extends testing {
//   constructor(city) {
//     super();
//     this.city = city;
//   }
// }

// const Testing_2 = new TestingChild("Chennai");
// console.log([Testing_2.id, Testing_2.name, Testing_2.city]);

// class Student {
//   #marks
//   name;
//   constructor () {
//     this.name='Hareesh';
//     this.#marks;
//   }
//   // getName() {
//   //   return this.name;
//   // }
//   // setname(name) {
//   //   this.name = name;
//   // }
//   getMarks() {
//     return this.#marks;
//   }
//   setMarks(mark) {
//     this.#marks = mark;
//   }
// }

// const Tarun = new Student();
// console.log(Tarun.name);
// Tarun.marks = 500;
// console.log(Tarun.#marks);

// class Bike {
//   constructor() {
//     this.company = "Honda";
//   }
// }
// class Vehicle extends Bike {
//   constructor(name, price) {
//     super();
//     this.name = name;
//     this.price = price;
//   }
// }
// let v = new Vehicle("Shine", "70000");

// console.log("vehicle", v);

// // Define the parent object
// var Animal = {
//   sound: "",
//   makeSound: function() {
//     console.log(this.sound);
//   }
// };

// // Define a subclass of Animal
// var Cat = Object.create(Animal);
// Cat.sound = "Meow";
// Cat.makeSound()

//Constructor function
function Bike(company) {
  this.company = company;
}

Bike.prototype.getCompany = function () {
  return this.company;
};
//Another constructor function
function Vehicle(name, price) {
  this.name = name;
  this.price = price;
}
let bike = new Bike("Honda");
Vehicle.prototype = bike; //Now Bike treats as a parent of Vehicle.
let vehicle = new Vehicle("Shine", 70000);

console.log("hi",vehicle)

/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};


/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
}

Person.prototype.eat = function(someFood){
  if (this.stomach.length < 10){
   this.stomach.push(someFood); 
  }
}

Person.prototype.poop = function(){
  return this.stomach.length = 0; 
};

Person.prototype.toString = function(){
  return `${this.name}, ${this.age}`;
};

/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model, milesPerGallon) {

  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0;
}

Car.prototype.fill = function (gallons){
  this.tank = this.tank + gallons; 

Car.prototype.drive = function(distance){
  this.odometer = this.odometer + distance
}

};

/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/

Baby.prototype = Object.create(Person.prototype);

function Baby(name, age, favoriteToy) {
  this.name = name; 
  this. age = age;
  this.favoriteToy = favoriteToy;
}

Baby.prototype.play = function(){
  return `Playing with ${this.favoriteToy}`
};

/* 
  TASK 4

  In your own words explain the four principles for the "this" keyword below:

  1. First Principle: Window/global Object Binding
      The value of "this" will be the window/console Object; when in global scope.

  2. Implicit Binding
      Only applies to objects with methods. "This" is referring to the left of the dot notation When function is being invoked. 
      The most commonly used rule found in 80% of use cases of "this" 

  3. New Binding
      The new keyword constructs a new object and "this" points to the new object.
      When a function is invoked as a constructor function using the new keyword 
        -"this" points to the new object that is created and returned by the constructor function

  4. Explicit Binding
    The call method, apply, and bind method when used on a function allow us to explicitly state what the "this" keyword refers to 
    We can override how we set constructor objects by taking the object-oriented approach. We do so by calling them explicitely with new functions. 
    .call and .apply 
*/   


///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
if (typeof exports !== 'undefined') {
  module.exports = module.exports || {}
  if (Airplane) { module.exports.Airplane = Airplane }
  if (Person) { module.exports.Person = Person }
  if (Car) { module.exports.Car = Car }
  if (Baby) { module.exports.Baby = Baby }
}

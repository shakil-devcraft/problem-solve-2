// 1 No: Answer
const person = {
    name: 'Shakil Ahmed',
    age: 27
};

const {name, age} = person;

// console.log(name, age);







// * 2 No: Answer need some requiretment follow of node then can you uncomment this codes
// import { calculateArea } from "./circle.js";

// const radius = 5;
// const area = calculateArea(radius);
// console.log(`The area of a circle with radius ${radius} is ${area}`);







// 3 No: Answer
class Rectangle {
    constructor(width, height)  {
        this.width = width;
        this.height = height;
    }

    calculateArea(){
        return this.width * this.height;
    }
}

const myRectangle = new Rectangle(5, 10);
// console.log(myRectangle);








// 4 No: Answer
class Person {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
}
  
const man = new Person('Shakil', 'Ahmed');

// console.log(man.fullName);








// 5 No: Answer
const Circle = class {
    constructor(radius) {
      this.radius = radius;
    }
  
    getCircumference() {
      return 2 * Math.PI * this.radius;
    }
};
  
const myCircle = new Circle(25);

// console.log(myCircle.getCircumference());







// 6 No: Answer
const propName1 = 'firstName';
const propName2 = 'lastName';
const propName3 = 'age';

const personInfo = {
  [propName1]: 'John',
  [propName2]: 'Doe',
  [propName3]: 30,
};

// console.log(personInfo.firstName);
// console.log(personInfo.lastName);
// console.log(personInfo.age);








// 7 No: Answer
class Animal {
    constructor(name) {
      this.name = name;
    }
  
    makeSound() {
    //   console.log(`${this.name} makes a sound.`);
    }
}
  
class Dog extends Animal {
    constructor(name, breed) {
      super(name);
      this.breed = breed;
    }
  
    bark() {
    //   console.log(`${this.name} ${this.breed}`);
    }
}
  
const myDog = new Dog('Tomi', 'very serious');
  
myDog.makeSound();
myDog.bark();







// 8 No: Answer
class Shape {
    constructor() {
        if (new.target === Shape) {
            throw new Error("Cannot instantiate abstract class Shape directly.");
        }
    }

    area() {
        throw new Error("Method 'area()' must be implemented.");
    }

    perimeter() {
        throw new Error("Method 'perimeter()' must be implemented.");
    }
}

class CircleA extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius * this.radius;
    }

    perimeter() {
        return 2 * Math.PI * this.radius;
    }
}

try {
    const shape = new Shape();
} catch (e) {
    // console.error(e.message);
}

const circle = new CircleA(5);
// console.log(circle.area());
// console.log(circle.perimeter());







// 9 No: Answer
class MathUtil {
    static square(number) {
        return number * number;
    }
}

// console.log(MathUtil.square(9));








// 10 No: Answer
const mySymbol = Symbol('mySymbol');

const myObject = {
    [mySymbol]: 'Symbol value'
};

console.log(myObject[mySymbol]);

console.log(Object.keys(myObject));

// const student1 = {
//     name: 'John Doe',
//     age: 18,
//     grade: 'A',
//     subjects: ['Math', 'Science', 'English'],
//     character: function talk() {
//         console.log(`My name is ${this.name}`);
//     }
// }
// const student2 = {
//     name: 'John Doe',
//     age: 18,
//     grade: 'A',
//     subjects: ['Math', 'Science', 'English'],
//     character: function talk() {
//         console.log(`My name is ${this.name}`);
//     }
// }
// const student3 = {  
//     name: 'John Doe',
//     age: 18,
//     grade: 'A',
//     subjects: ['Math', 'Science', 'English'],
//     character: function talk() {
//         console.log(`My name is ${this.name}`);
//     }
// }

// arr.__prototype__ (refrence)
// Array.prototype
// String.prototype

// factory function 

// function Persons(name, age) {
//     const person = {
//         name: name,
//         age: age,
//         talk() {
//             console.log(`My name is ${this.name}`);
//         },
//     };
//     return person;
// }

// let person1 = Persons('John Doe', 18);
// let person2 = Persons('John', 17);
// let person3 = Persons('Doe', 19);


// constructor function

// function Persons(name, age) {
//     this.name = name;
//     this.age = age;
// }

// Persons.prototype.talk = function() {
//     console.log(`My name is ${this.name}`);
// };

// let person1 = new Persons('John Doe', 18);
// let person2 = new Persons('John', 17);
// let person3 = new Persons('Doe', 19);


// template

// first word always capital
// not return value
// class Persons {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     talk() {
//         console.log(`My name is ${this.name}`);
//     }
// }

// let person1 = new Persons('John Doe', 18);
// let person2 = new Persons('John', 17);
// let person3 = new Persons('Doe', 19);


// inheritance
// extends and super 

class Persons {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    talk() {
        console.log(`My name is ${this.name}`);
    }
}

class Students extends Persons {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    study() {
        console.log(`${this.name} is studying.`);
    }
}

let student1 = new Students('John Doe', 18, 'A');
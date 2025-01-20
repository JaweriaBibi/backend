const student = {
    name: 'John Doe',
    age: 18,
    grade: 'A',
    subjects: ['Math', 'Science', 'English'],
    talk() {
        console.log(`My name is`);
    }
}
const student2 = {
    name: 'John Doe',
    age: 18,
    grade: 'A',
    subjects: ['Math', 'Science', 'English'],
    talk() {
        console.log(`My name is `);
    }
}
const student3 = {  
    name: 'John Doe',
    age: 18,
    grade: 'A',
    subjects: ['Math', 'Science', 'English'],
    talk() {
        console.log(`My name is ${this.name}`);
    }
}
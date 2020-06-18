class Person {
    name="";
    age ="";
    jobTitle = "";

    constructor(name,age,job) {
        this.name = name;
        this.age = age;
        this.jobTitle = job;
    }
    hiThere = () => {
        return `Hello there, my name is ${this.name} and I am ${this.age} years old, and I am a ${this.jobTitle}`;
    }
}

let barbara = new Person("Barbara",43,"Web Developer");

console.log(barbara.hiThere())
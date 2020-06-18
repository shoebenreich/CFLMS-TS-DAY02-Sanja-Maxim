class Person{
 name="";
 age ="";
 jobTitle = "";
    

    constructor(name,age,jobTitle) {
        this.name = name;
        this.age = age;
        this.jobTitle = jobTitle;
    }
    hiThere  () {
        return `Hello there, my name is ${this.name} and I am ${this.age} years old, and I am a ${this.jobTitle}`;
    }
}

class MoreInfo extends Person{
    salary="";
    jobLocation="";

    constructor (name,age,jobTitle,salary,jobLocation){
        super(name,age,jobTitle);
        this.salary = salary;
        this.jobLocation = jobLocation;
    }
    hello () {
        return `${super.hiThere()} and I get ${this.salary} every month, and I work in ${this.jobLocation}`;
    }

}


let barbara = new MoreInfo("Barbara",43,"Web Developer",3000,"Vienna");

    console.log(barbara.hello())


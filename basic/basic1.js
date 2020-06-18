var Person = /** @class */ (function () {
    function Person(name, age, job) {
        var _this = this;
        this.name = "";
        this.age = "";
        this.jobTitle = "";
        this.hiThere = function () {
            return "Hello there, My name is " + _this.name + " and I am " + _this.age + " years old, and I am a " + _this.jobTitle;
        };
        this.name = name;
        this.age = age;
        this.jobTitle = job;
    }
    return Person;
}());
var barbara = new Person("Barbara", 43, "Web Developer");
console.log(barbara.hiThere());

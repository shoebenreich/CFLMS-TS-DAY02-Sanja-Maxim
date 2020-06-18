var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age, jobTitle) {
        this.name = "";
        this.age = "";
        this.jobTitle = "";
        this.name = name;
        this.age = age;
        this.jobTitle = jobTitle;
    }
    Person.prototype.hiThere = function () {
        return "Hello there, my name is " + this.name + " and I am " + this.age + " years old, and I am a " + this.jobTitle;
    };
    return Person;
}());
var MoreInfo = /** @class */ (function (_super) {
    __extends(MoreInfo, _super);
    function MoreInfo(name, age, jobTitle, salary, jobLocation) {
        var _this = _super.call(this, name, age, jobTitle) || this;
        _this.salary = "";
        _this.jobLocation = "";
        _this.salary = salary;
        _this.jobLocation = jobLocation;
        return _this;
    }
    MoreInfo.prototype.hello = function () {
        return _super.prototype.hiThere.call(this) + " and I get " + this.salary + " every month, and I work in " + this.jobLocation;
    };
    return MoreInfo;
}(Person));
var barbara = new MoreInfo("Barbara", 43, "Web Developer", 3000, "Vienna");
console.log(barbara.hello());

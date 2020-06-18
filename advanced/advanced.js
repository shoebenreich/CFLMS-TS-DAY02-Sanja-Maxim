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
var Vehicles = /** @class */ (function () {
    function Vehicles(brand, model, type, km, hp, seats, color, year, fuel, automatic) {
        this.brand = "";
        this.model = "";
        this.type = "";
        this.km = "";
        this.hp = "";
        this.seats = "";
        this.color = "";
        this.year = "";
        this.fuel = "";
        this.automatic = "";
        this.brand = brand;
        this.type = type;
        this.km = km;
        this.hp = hp;
        this.seats = seats;
        this.color = color;
        this.year = year;
        this.fuel = fuel;
        this.automatic = automatic;
        this.model = model;
    }
    Vehicles.prototype.printInfo = function () {
        return "<tr><td>" + this.brand + "</td><td>" + this.model + "</td><td>" + this.km + "</td><td>" + this.hp + "</td><td>" + this.seats + "</td><td>" + this.color + "</td><td>" + this.year + "</td><td>" + this.fuel + "</td><td>" + this.automatic + "</td><td>" + this.type + "</td></tr>";
    };
    return Vehicles;
}());
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Truck;
}(Vehicles));
// let output = document.getElementsByClassName("car")
var mustang = new Vehicles("Ford", "Mustang", "Sportback", 120000, 480, 4, "blue", 1960, "petrol", false);
var BMW = new Vehicles("BMW", "Mustang", "Sportback", 120000, 480, 4, "blue", 1960, "petrol", false);
// $(".car").append(mustang.printInfo());
// document.getElementsByClassName('car').innerHTML=mustang.printInfo();
var myContainer = document.querySelector("#content");
myContainer.innerHTML += mustang.printInfo();
myContainer.innerHTML += BMW.printInfo();
myContainer.innerHTML += mustang.printInfo();
myContainer.innerHTML += mustang.printInfo();

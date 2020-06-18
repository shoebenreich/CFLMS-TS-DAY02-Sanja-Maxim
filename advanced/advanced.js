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
        return "Brand: " + this.brand + "</td>Type: " + this.type + "</td>KM: " + this.km + "</td>Horsepower: " + this.hp + "</td>Seats: " + this.seats + "</td>Color: " + this.color + "</td>Manufacturing Year: " + this.year + "</td>FuelType: " + this.fuel + "</td>Automatic: " + this.automatic + "</td>Model: " + this.model + "</td>\n    }\n}\n\n// let output = document.getElementsByClassName(\"car\")\nlet mustang = new Vehicles(\"Ford\",\"Mustang\",\"Sportback\",120000,480,4,\"blue\",1960,\"petrol\",false);\n\n\nlet BMW = new Vehicles(\"BMW\",\"Mustang\",\"Sportback\",120000,480,4,\"blue\",1960,\"petrol\",false);\n\n\n// $(\".car\").append(mustang.printInfo());\n// document.getElementsByClassName('car').innerHTML=mustang.printInfo();\n\nlet myContainer = <HTMLElement> document.querySelector(\".car\");\nmyContainer.innerHTML = mustang.printInfo();\nmyContainer.innerHTML += BMW.printInfo();\n";
    };
    return Vehicles;
}());

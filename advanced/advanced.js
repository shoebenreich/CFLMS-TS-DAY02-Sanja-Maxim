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
        console.log("Brand: " + this.brand + "\nType: " + this.type + "\nKM: " + this.km + "\nHorsepower: " + this.hp + "\nSeats: " + this.seats + "\nColor: " + this.color + "\nManufacturing Year: " + this.year + "\nFuelType: " + this.fuel + "\nAutomatic: " + this.automatic + "\nModel: " + this.model + "\n");
    };
    return Vehicles;
}());
var mustang = new Vehicles("Ford", "Mustang", "Sportback", 120000, 480, 4, "blue", 1960, "petrol", false);
mustang.printInfo();

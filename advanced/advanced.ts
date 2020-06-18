class Vehicles {
    brand="";
    model="";
    type="";
    km="";
    hp="";
    seats="";
    color="";
    year="";
    fuel="";
    automatic="";

    constructor(brand,model,type,km,hp,seats,color,year,fuel,automatic) {
        this.brand= brand;
        this.type=type;
        this.km=km;
        this.hp=hp;
        this.seats=seats;
        this.color=color;
        this.year=year;
        this.fuel=fuel;
        this.automatic=automatic;
        this.model=model;
    }

    printInfo(){
        return `Brand: ${this.brand}</td>Type: ${this.type}</td>KM: ${this.km}</td>Horsepower: ${this.hp}</td>Seats: ${this.seats}</td>Color: ${this.color}</td>Manufacturing Year: ${this.year}</td>FuelType: ${this.fuel}</td>Automatic: ${this.automatic}</td>Model: ${this.model}</td>
    }
}

// let output = document.getElementsByClassName("car")
let mustang = new Vehicles("Ford","Mustang","Sportback",120000,480,4,"blue",1960,"petrol",false);


let BMW = new Vehicles("BMW","Mustang","Sportback",120000,480,4,"blue",1960,"petrol",false);


// $(".car").append(mustang.printInfo());
// document.getElementsByClassName('car').innerHTML=mustang.printInfo();

let myContainer = <HTMLElement> document.querySelector(".car");
myContainer.innerHTML = mustang.printInfo();
myContainer.innerHTML += BMW.printInfo();

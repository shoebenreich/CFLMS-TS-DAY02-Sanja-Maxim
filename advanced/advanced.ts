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
        return `<tr><td>${this.brand}</td><td>${this.model}</td><td>${this.km}</td><td>${this.hp}</td><td>${this.seats}</td><td>${this.color}</td><td>${this.year}</td><td>${this.fuel}</td><td>${this.automatic}</td><td>${this.type}</td></tr>`
    }
}

class Truck extends Vehicles {
}

// let output = document.getElementsByClassName("car")
let mustang = new Vehicles("Ford","Mustang","Sportback",120000,480,4,"blue",1960,"petrol",false);


let BMW = new Vehicles("BMW","Mustang","Sportback",120000,480,4,"blue",1960,"petrol",false);


// $(".car").append(mustang.printInfo());
// document.getElementsByClassName('car').innerHTML=mustang.printInfo();

let myContainer = <HTMLElement> document.querySelector("#content");
myContainer.innerHTML += mustang.printInfo();
myContainer.innerHTML += BMW.printInfo();
myContainer.innerHTML += mustang.printInfo();
myContainer.innerHTML += mustang.printInfo();
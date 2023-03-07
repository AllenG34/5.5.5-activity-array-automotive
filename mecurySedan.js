//this includes the vehicle class as a module
const VehicleModule = require("./vehicle.js")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

class Car extends VehicleModule {
    super(make, midek, year, color, mileage)
    this.maximumPassengers = 5;
    this.passengers = 0;
    this.numberOfWheels = 4;
    this.maximumSpeed = 160; 
    this.fuel = 10;
    this.scheduleService = false;
}

scheduleService(mileage) {
    if (mileage>this.scheduleService){
        return true;
    } else {
        return false;
    }
}

start() {
    if (this.fuel > 0){
         return true ;
    }  else {
        return false 
    }
}

loadPassenger(num){
    
}




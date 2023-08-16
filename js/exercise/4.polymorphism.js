// polymorphism
class Vehicle {
  drive() {
    return "The vehicle is being driven.";
  }
}

class Car extends Vehicle {
  drive() {
    return "The car is being driven.";
  }
}

class ElectricCar extends Car {
  drive() {
    return "The electric car is being driven silently.";
  }
}

let myVehicle = new Vehicle();
let myCar = new Car();
let myElectricCar = new ElectricCar();

console.log(myVehicle.drive());
console.log(myCar.drive());
console.log(myElectricCar.drive());

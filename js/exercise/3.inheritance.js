// class
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  getInfo() {
    return `This car is a ${this.make} ${this.model}`;
  }
}

// inheritance
class ElectricCar extends Car {
  constructor(make, model, batteryCapacity) {
    super(make, model);
    this.batteryCapacity = batteryCapacity;
  }

  getInfo() {
    return `${super.getInfo()} It has a battery capacity of ${
      this.batteryCapacity
    } Kwh`;
  }
}

let myElectricCar = new ElectricCar("Tesla", "Roadster", "250");
console.log(myElectricCar.getInfo());

// Class
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  getInfo() {
    return `The car is a ${this.make} ${this.model}`;
  }
}

// Object
const myCar = new Car("Tesla", "Model Y");

console.log(myCar.getInfo());

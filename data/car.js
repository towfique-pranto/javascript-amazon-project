class Car {
  #brand;
  #model;
  speed;
  isTrunkOpen;

  constructor(brand, model) {
    this.#brand = brand;
    this.#model = model;
    this.speed = 0;
    this.isTrunkOpen = false;
  }
  displayInfo() {
    console.log(`${this.#brand} ${this.#model}, Speed: ${this.speed} km/h trunk open ${this.isTrunkOpen}`);
  }
  go() {
    if (this.speed < 200 && this.isTrunkOpen === false)
      this.speed += 5;
  }
  brake() {
    if (this.speed > 0)
      this.speed -= 5;
  }
  openTrunk() {
    if (this.speed === 0)
      this.isTrunkOpen = true;
  }
  closeTrunk() {
    this.isTrunkOpen = false;
  }
}

class RaceCar extends Car {
  acceleration;

  constructor(brand, model, acceleration) {
    super(brand, model);
    this.acceleration = acceleration;
  }

  go() {
    if (this.speed < 300)
      this.speed += this.acceleration;
  }
  openTrunk() {
    this.isTrunkOpen = false;
  }
  closeTrunk() {
    this.isTrunkOpen = false;
  }
}


const car1 = new Car('Toyota', 'Corolla');
const car2 = new Car('Tesla', 'Model 3');
const car3 = new RaceCar('McLaren', 'F1', 20);


car1.openTrunk();
car1.go();
car1.closeTrunk();
car1.go();
car1.openTrunk();

car2.go();
car2.openTrunk();

car3.go();
car3.go();
car3.go();
car3.openTrunk();

car1.displayInfo();
car2.displayInfo();
car3.displayInfo();

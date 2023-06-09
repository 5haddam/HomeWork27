function Human(name, age) {
  this.name = name;
  this.age = age;
  this.humanInfornationToConsole = function() {
    console.log(`Name: ${name}\nAge: ${age}`);
  };
};

function Car(brand, model, releaseDate, licensePlate, owner) {
  this.brand = brand;
  this.model = model;
  this.releaseDate = releaseDate;
  this.licensePlate = licensePlate;
  if (owner.age >= 18 && owner instanceof Human) {
    this.owner = owner;
  } else {
    console.log(owner instanceof Human ? 'Owner\'s age must be more then 18' : 'The owner must belong to the class Human');
  };
  this.CarInfornationToConsole = function() {
    console.log(`Brand: ${brand}\nModel: ${model}\nRelease date: ${releaseDate}\nLicense plate: ${licensePlate}`);
    owner instanceof Human ? owner.humanInfornationToConsole() : console.log('The owner must belong to the class Human');
  };
}

const human = new Human('Mykola', 25);
const humanYoung = new Human('Sasha', 15);
const car = new Car('Toyota', 'Land Cruiser 300', 2023, 'xx0000xx', human);
const carWithYoungOwner = new Car('Toyota', 'CH-R', 2021, 'xx0001xx', humanYoung);
const carWithInvalidOwner = new Car('BMW', 'M5 F90', 2020, 'xx0002xx', 'Alex');
car.CarInfornationToConsole();
carWithYoungOwner.CarInfornationToConsole();
carWithInvalidOwner.CarInfornationToConsole();

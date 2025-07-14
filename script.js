// Complete the js code
function Car(make, model) {
	this.make = make;
	this.model = model;
}

Car.prototype.getMakeModel = function() {
  return this.make + " " + this.model;
};

function SportsCar(make, model, topSpeed) {
	car.call(this,make,model)
	this.topSpeed = topSpeed;
}
SportsCar.prototype = Object.create(Car.prototype);

SportsCar.prototype.constructor = SportsCar;

SportsCar.prototype.getTopSpeed = function () {
	return this.topSpeed;
}
const myCar = new Car("Toyota", "Corolla");
console.log(myCar.getMakeModel()); // Toyota Corolla

const mySportsCar = new SportsCar("Ferrari", "488", 211);
console.log(mySportsCar.getMakeModel()); // Ferrari 488
console.log(mySportsCar.getTopSpeed());  // 211
// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;

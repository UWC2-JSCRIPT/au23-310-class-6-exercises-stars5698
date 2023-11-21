// Donna Quach, JavaScript 310B, Autumn 2023
// Class 6 Exercises 

/**
 * Car class
 * @constructor
 * @param {String} model
 */

class Car {
    constructor(model) {
        this.model = model; 
        this.currentSpeed = 0; // Initial speed 

        // instance methods
        this.accelerate = () => {
            this.currentSpeed += 1; // Increase current speed by 1
        }

        this.brake = () => {
            this.currentSpeed -= 1; // Decrease current speed by 1
        }
    }

    // prototype method 
    toString() {
        return console.log(`Model car ${this.model}'s current speed: ${this.currentSpeed}`); 
    }
}

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()
const myFirstCar = new Car('Jeep Grand Cherokee');
myFirstCar.accelerate();
myFirstCar.accelerate();
myFirstCar.brake();

myFirstCar.toString();

/**
 * ElectricCar class
 * @constructor
 * @param {String} model
 */

class ElectricCar extends Car {
    constructor(model) {
        super(model); 
        this.motor = 'electric';

        // instance method
        this.accelerateElectric = () => {
            // Call Car's accelerate method twice because we have an electric car 
            this.accelerate();
            this.accelerate();
        }
    }

    // ElectricCar's own toString() prototype method 
    toString() {
        return console.log(`Model car ${this.model} has an ${this.motor} motor and has a current speed of ${this.currentSpeed}`); 
    } 
}

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()
const myFirstElectricCar = new ElectricCar('Tesla'); 

myFirstElectricCar.accelerateElectric();
myFirstElectricCar.accelerateElectric();
myFirstElectricCar.brake();

myFirstElectricCar.toString();

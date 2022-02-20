"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
const ICarDefaults = {
    hasAirBag: false
};
class Vehicle {
    constructor(name, color, props, id) {
        this.name = name;
        this.color = color;
        this.props = Object.assign(Object.assign({}, props), ICarDefaults);
        this.id = id !== null && id !== void 0 ? id : crypto_1.default.randomUUID();
    }
}
class Car extends Vehicle {
    constructor(name, color, props, id) {
        super(name, color, props, id);
    }
    static create(name, color, props, id) {
        const car = new Car(name, color, props, id);
        return car;
    }
}
const uno = Car.create("Uno", "Preto", {
    chassi: 827382
});
const onix = Car.create("Onix", "Branco", {
    hasAirBag: true,
    chassi: 65363
});
console.log(uno);
console.log(onix);
class Motorcycle extends Vehicle {
    constructor(name, color, props, id) {
        super(name, color, props, id);
    }
    static create(name, color, props, id) {
        const motorcycle = new Motorcycle(name, color, props, id);
        return motorcycle;
    }
}
const fazer = Motorcycle.create("Fazer 250", "Azul", { brand: "Yamaha", diskBrake: true });
const twister = Motorcycle.create("Twister 250", "Vermelha", { brand: "Honda", diskBrake: true });
console.log(fazer);
console.log(twister);
// class Truck extends Vehicle {}

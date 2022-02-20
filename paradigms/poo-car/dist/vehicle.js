"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
class Vehicle {
    constructor(props, id) {
        this.props = props;
        this.id = id !== null && id !== void 0 ? id : crypto_1.default.randomUUID();
    }
}
class Car extends Vehicle {
    constructor(props, id) {
        super(props, id);
    }
    static create(props, id) {
        const car = new Car(props, id);
        return car;
    }
}
const uno = Car.create({
    name: "Uno",
    color: "Preto",
    hasAirBag: true
});
console.log(uno);
// class Motorcycle extends Vehicle {}
// class Truck extends Vehicle {}

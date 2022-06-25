"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
class Vehicle {
    constructor(vehicle, props, id) {
        this.vehicle = vehicle;
        this.props = props;
        this.id = id !== null && id !== void 0 ? id : crypto_1.default.randomUUID();
    }
    moveOn() {
        return `O ${this.vehicle.brand} ${this.vehicle.name} está se movimentando`;
    }
}
class Car extends Vehicle {
    constructor(data, props, id) {
        super(data, props, id);
    }
    static create(data, props, id) {
        const car = new Car(data, props, id);
        return car;
    }
}
const uno = Car.create({ name: "Uno", color: "Preto", brand: "Fiat" }, {
    hasAirBag: false,
    chassi: 827382
});
const onix = Car.create({ name: "Onix", color: "Branco", brand: "Chevrolet" }, {
    hasAirBag: true,
    chassi: 65363
});
console.log(uno);
console.log(uno.moveOn());
console.log(onix);
console.log(onix.moveOn());
class Motorcycle extends Vehicle {
    constructor(data, props, id) {
        super(data, props, id);
    }
    static create(data, props, id) {
        const motorcycle = new Motorcycle(data, props, id);
        return motorcycle;
    }
}
const fazer = Motorcycle.create({ name: "Fazer 250", color: "Azul", brand: "Yamaha" }, { diskBrake: true });
const twister = Motorcycle.create({ name: "Twister 250", color: "Vermelha", brand: "Honda" }, { diskBrake: true });
console.log(fazer);
console.log(twister);
class Truck extends Vehicle {
    constructor(data, props, id) {
        super(data, props, id);
    }
    static create(data, props, id) {
        const truck = new Truck(data, props, id);
        return truck;
    }
}
const constellation = Truck.create({ name: "Constellation", color: "Cinza", brand: "Volkswagen" }, { charge: 2 });
console.log(constellation);

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
class Vehicle {
    constructor(name, color, brand, props, id) {
        this.name = name;
        this.color = color;
        this.brand = brand;
        this.props = props;
        this.id = id !== null && id !== void 0 ? id : crypto_1.default.randomUUID();
    }
    moveOn() {
        return `O ${this.brand} ${this.name} está se movimentando`;
    }
}
class Car extends Vehicle {
    constructor(name, color, brand, props, id) {
        super(name, color, brand, props, id);
    }
    static create(name, color, brand, props, id) {
        const car = new Car(name, color, brand, props, id);
        return car;
    }
}
const uno = Car.create("Uno", "Preto", "Fiat", {
    hasAirBag: false,
    chassi: 827382
});
const onix = Car.create("Onix", "Branco", "Chevrolet", {
    hasAirBag: true,
    chassi: 65363
});
console.log(uno);
console.log(uno.moveOn());
console.log(onix);
console.log(onix.moveOn());
class Motorcycle extends Vehicle {
    constructor(name, color, brand, props, id) {
        super(name, color, brand, props, id);
    }
    static create(name, color, brand, props, id) {
        const motorcycle = new Motorcycle(name, color, brand, props, id);
        return motorcycle;
    }
}
const fazer = Motorcycle.create("Fazer 250", "Azul", "Yamaha", { diskBrake: true });
const twister = Motorcycle.create("Twister 250", "Vermelha", "Honda", { diskBrake: true });
console.log(fazer);
console.log(twister);
class Truck extends Vehicle {
    constructor(name, color, brand, props, id) {
        super(name, color, brand, props, id);
    }
    static create(name, color, brand, props, id) {
        const truck = new Truck(name, color, brand, props, id);
        return truck;
    }
}
const constellation = Truck.create("Constellation", "Cinza", "Volkswagen", { charge: 2 });
console.log(constellation);

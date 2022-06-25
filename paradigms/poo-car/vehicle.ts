import crypto from "crypto";

type TVehicle = {
    name: String
    color: String
    brand: String
}

type TCar = {
    hasAirBag?: Boolean
    chassi: Number
}

abstract class Vehicle<T> {
    public vehicle: TVehicle
    private props: T
    public readonly id: String

    constructor(vehicle: TVehicle, props: T, id?: String) {
        this.vehicle = vehicle
        this.props = props
        this.id = id ?? crypto.randomUUID()
    }

    public moveOn(): string {
        return `O ${this.vehicle.brand} ${this.vehicle.name} está se movimentando`
    }
}

class Car extends Vehicle<TCar> {
    private constructor(data: TVehicle, props: TCar, id?: String) {
        super(data, props, id)
    }
    static create(data: TVehicle, props: TCar, id?: String) {
        const car = new Car(data, props, id)
        return car
    }
}

const uno = Car.create({ name: "Uno", color: "Preto", brand: "Fiat" }, {
    hasAirBag: false,
    chassi: 827382
})

const onix = Car.create({ name: "Onix", color: "Branco", brand: "Chevrolet" }, {
    hasAirBag: true,
    chassi: 65363
})

console.log(uno)
console.log(uno.moveOn())
console.log(onix)
console.log(onix.moveOn())


type TMotorcycle = {
    diskBrake?: Boolean
}

class Motorcycle extends Vehicle<TMotorcycle> {
    private constructor(data: TVehicle, props: TMotorcycle, id?: String) {
        super(data, props, id)
    }
    static create(data: TVehicle, props: TMotorcycle, id?: String) {
        const motorcycle = new Motorcycle(data, props, id)
        return motorcycle
    }
}

const fazer = Motorcycle.create({ name: "Fazer 250", color: "Azul", brand: "Yamaha" }, { diskBrake: true })
const twister = Motorcycle.create({ name: "Twister 250", color: "Vermelha", brand: "Honda" }, { diskBrake: true })

console.log(fazer)
console.log(twister)

type TTruck = {
    charge: Number
}

class Truck extends Vehicle<TTruck> {
    private constructor(data: TVehicle, props: TTruck, id?: String) {
        super(data, props, id)
    }
    static create(data: TVehicle, props: TTruck, id?: String) {
        const truck = new Truck(data, props, id)
        return truck
    }
}

const constellation = Truck.create({ name: "Constellation", color: "Cinza", brand: "Volkswagen" }, { charge: 2 })
console.log(constellation)
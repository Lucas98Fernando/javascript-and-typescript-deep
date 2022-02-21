import crypto from "crypto";

type ICar = {
    hasAirBag?: Boolean
    chassi: Number
}

abstract class Vehicle<T> {
    public name: String
    public color: String
    public brand: String
    private props: T
    public id: String

    constructor(name: String, color: String, brand: String, props: T, id?: String,) {
        this.name = name
        this.color = color
        this.brand = brand
        this.props = props
        this.id = id ?? crypto.randomUUID()
    }

    public moveOn(): string {
        return `O ${this.brand} ${this.name} está se movimentando`
    }
}

class Car extends Vehicle<ICar> {
    private constructor(name: String, color: String, brand: String, props: ICar, id?: String) {
        super(name, color, brand, props, id)
    }
    static create(name: String, color: String, brand: String, props: ICar, id?: String) {
        const car = new Car(name, color, brand, props, id)
        return car
    }
}

const uno = Car.create("Uno", "Preto", "Fiat", {
    hasAirBag: false,
    chassi: 827382
})

const onix = Car.create("Onix", "Branco", "Chevrolet", {
    hasAirBag: true,
    chassi: 65363
})

console.log(uno)
console.log(uno.moveOn())
console.log(onix)
console.log(onix.moveOn())


type IMotorcycle = {
    diskBrake?: Boolean
}

class Motorcycle extends Vehicle<IMotorcycle> {
    private constructor(name: String, color: String, brand: String, props: IMotorcycle, id?: String) {
        super(name, color, brand, props, id)
    }
    static create(name: String, color: String, brand: String, props: IMotorcycle, id?: String) {
        const motorcycle = new Motorcycle(name, color, brand, props, id)
        return motorcycle
    }
}

const fazer = Motorcycle.create("Fazer 250", "Azul", "Yamaha", { diskBrake: true })
const twister = Motorcycle.create("Twister 250", "Vermelha", "Honda", { diskBrake: true })

console.log(fazer)
console.log(twister)

type ITruck = {
    charge: Number
}

class Truck extends Vehicle<ITruck> {
    private constructor(name: String, color: String, brand: String, props: ITruck, id?: String) {
        super(name, color, brand, props, id)
    }
    static create(name: String, color: String, brand: String, props: ITruck, id?: String) {
        const truck = new Truck(name, color, brand, props, id)
        return truck
    }
}

const constellation = Truck.create("Constellation", "Cinza", "Volkswagen", { charge: 2 })
console.log(constellation)
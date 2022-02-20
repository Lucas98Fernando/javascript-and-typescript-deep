import crypto from "crypto";

type ICar = {
    hasAirBag?: Boolean
    chassi: Number
}

abstract class Vehicle<T> {
    public name: String
    public color: String
    private props: T
    public id: String

    constructor(name: String, color: String, props: T, id?: String,) {
        this.name = name
        this.color = color
        this.props = props
        this.id = id ?? crypto.randomUUID()
    }
}

class Car extends Vehicle<ICar> {
    private constructor(name: String, color: String, props: ICar, id?: String) {
        super(name, color, props, id)
    }
    static create(name: String, color: String, props: ICar, id?: String) {
        const car = new Car(name, color, props, id)
        return car
    }
}

const uno = Car.create("Uno", "Preto", {
    hasAirBag: false,
    chassi: 827382
})

const onix = Car.create("Onix", "Branco", {
    hasAirBag: true,
    chassi: 65363
})

console.log(uno)
console.log(onix)


type IMotorcycle = {
    brand: String,
    diskBrake?: Boolean
}

class Motorcycle extends Vehicle<IMotorcycle> {
    private constructor(name: String, color: String, props: IMotorcycle, id?: String) {
        super(name, color, props, id)
    }
    static create(name: String, color: String, props: IMotorcycle, id?: String) {
        const motorcycle = new Motorcycle(name, color, props, id)
        return motorcycle
    }
}

const fazer = Motorcycle.create("Fazer 250", "Azul", { brand: "Yamaha", diskBrake: true })
const twister = Motorcycle.create("Twister 250", "Vermelha", { brand: "Honda", diskBrake: true })

console.log(fazer)
console.log(twister)

// class Truck extends Vehicle {}

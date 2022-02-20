import crypto from "crypto";

type ICar = {
    name: String
    color: String
    hasAirBag?: Boolean
}

abstract class Vehicle<T> {
    public id: String
    private props: T

    constructor(props: T, id?: String,) {
        this.props = props
        this.id = id ?? crypto.randomUUID()
    }
}

class Car extends Vehicle<ICar> {
    private constructor(props: ICar, id?: String) {
        super(props, id)
    }
    static create(props: ICar, id?: String) {
        const car = new Car(props, id)
        return car
    }
}

const uno = Car.create({
    name: "Uno",
    color: "Preto",
    hasAirBag: true
})

console.log(uno)

// class Motorcycle extends Vehicle {}

// class Truck extends Vehicle {}

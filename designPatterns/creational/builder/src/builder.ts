interface IBuilder {
    reset(): void
    setSeats(seats: number): string
    setEngine(engine: string): string
    setTripComputer(computer: string): string
    setGPS(gps: string): string
}

class Car { }

class Manual { }

class CarBuilder implements IBuilder {
    private car!: Car

    constructor() {
        this.reset()
    }

    reset(): void { this.car = new Car() }

    setSeats(seats: number) {
        const info = `Contruindo carro com ${seats} assentos`
        console.log(info)
        return info
    }

    setEngine(engine: string) { return engine }

    setTripComputer(computer: string) { return computer }

    setGPS(gps: string) { return gps }

    getProduct(): Car {
        const product = this.car
        this.reset()
        return product
    }
}

class CarManualBuilder implements IBuilder {
    private manual!: Manual

    constructor() {
        this.reset()
    }

    reset(): void { this.manual = new Manual() }

    setSeats(seats: number) {
        const info = `Contruindo manual do carro com ${seats} assentos`
        console.log(info)
        return info
    }

    setEngine(engine: string) { return engine }

    setTripComputer(computer: string) { return computer }

    setGPS(gps: string) { return gps }

    getProduct(): Manual {
        const product = this.manual
        this.reset()
        return product
    }
}

class SportrEngine { }

class Director {
    private builder!: IBuilder

    setBuilder(builder: IBuilder) {
        this.builder = builder
        return this.builder
    }

    constructSportsCar(builder: IBuilder) {
        builder.reset()
        builder.setSeats(2)
        builder.setEngine("v6")
        builder.setTripComputer("High Tech")
        builder.setGPS("Awesome")
    }
}

class Application {
    makeCar() {
        const director = new Director()
        const carBuilder = new CarBuilder()
        const carManualBuilder = new CarManualBuilder()

        director.constructSportsCar(carBuilder)
        director.constructSportsCar(carManualBuilder)

        carBuilder.getProduct()
        carManualBuilder.getProduct()
    }
}

new Application().makeCar()

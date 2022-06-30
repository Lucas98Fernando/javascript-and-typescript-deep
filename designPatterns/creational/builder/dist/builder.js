"use strict";
class Car {
}
class Manual {
}
class CarBuilder {
    constructor() {
        this.reset();
    }
    reset() { this.car = new Car(); }
    setSeats(seats) {
        const info = `Contruindo carro com ${seats} assentos`;
        console.log(info);
        return info;
    }
    setEngine(engine) { return engine; }
    setTripComputer(computer) { return computer; }
    setGPS(gps) { return gps; }
    getProduct() {
        const product = this.car;
        this.reset();
        return product;
    }
}
class CarManualBuilder {
    constructor() {
        this.reset();
    }
    reset() { this.manual = new Manual(); }
    setSeats(seats) {
        const info = `Contruindo manual do carro com ${seats} assentos`;
        console.log(info);
        return info;
    }
    setEngine(engine) { return engine; }
    setTripComputer(computer) { return computer; }
    setGPS(gps) { return gps; }
    getProduct() {
        const product = this.manual;
        this.reset();
        return product;
    }
}
class SportrEngine {
}
class Director {
    setBuilder(builder) {
        this.builder = builder;
        return this.builder;
    }
    constructSportsCar(builder) {
        builder.reset();
        builder.setSeats(2);
        builder.setEngine("v6");
        builder.setTripComputer("High Tech");
        builder.setGPS("Awesome");
    }
}
class Application {
    makeCar() {
        const director = new Director();
        const carBuilder = new CarBuilder();
        const carManualBuilder = new CarManualBuilder();
        director.constructSportsCar(carBuilder);
        director.constructSportsCar(carManualBuilder);
        carBuilder.getProduct();
        carManualBuilder.getProduct();
        console.log(carBuilder);
    }
}
new Application().makeCar();

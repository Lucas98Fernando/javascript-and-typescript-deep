interface ITransport {
    delivery(): string
}

// Class Creator
abstract class Logistics {
    public abstract createTransport(): ITransport

    public planDelivery() {
        return this.createTransport()
    }
}

// Concrete Creator RoadLogistics
class RoadLogistics extends Logistics {
    public createTransport(): ITransport {
        return new Truck();
    }
}

// Concrete Creator SeaLogistics
class SeaLogistics extends Logistics {
    public createTransport() {
        return new Ship();
    }
}

// Concrete Product Truck
class Truck implements ITransport {
    public delivery(): string {
        return "Entrega por terra"
    }
}

// Concrete Product Ship
class Ship implements ITransport {
    public delivery(): string {
        return "Entrega por água"
    }
}

const truck = new RoadLogistics();
console.log(truck.planDelivery().delivery());
// Output: Entrega por terra

const ship = new SeaLogistics();
console.log(ship.planDelivery().delivery());
// Output: Entrega por água

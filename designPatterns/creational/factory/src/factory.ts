interface ITransport {
    delivery(): string
}

class Truck implements ITransport {
    delivery(): string {
        return "Entrega por terra"
    }
}

class Ship implements ITransport {
    delivery(): string {
        return "Entrega por água"
    }
}

const truck = new Truck();
console.log(truck.delivery());

const ship = new Ship();
console.log(ship.delivery());
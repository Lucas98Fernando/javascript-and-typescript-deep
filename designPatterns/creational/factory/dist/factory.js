"use strict";
// Class Creator
class Logistics {
    planDelivery() {
        return this.createTransport();
    }
}
// Concrete Creator RoadLogistics
class RoadLogistics extends Logistics {
    createTransport() {
        return new Truck();
    }
}
// Concrete Creator SeaLogistics
class SeaLogistics extends Logistics {
    createTransport() {
        return new Ship();
    }
}
// Concrete Product Truck
class Truck {
    delivery() {
        return "Entrega por terra";
    }
}
// Concrete Product Ship
class Ship {
    delivery() {
        return "Entrega por água";
    }
}
const truck = new RoadLogistics();
console.log(truck.planDelivery().delivery());
// Output: Entrega por terra
const ship = new SeaLogistics();
console.log(ship.planDelivery().delivery());
// Output: Entrega por água

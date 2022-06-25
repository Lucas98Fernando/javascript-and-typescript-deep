"use strict";
class Truck {
    delivery() {
        return "Entrega por terra";
    }
}
class Ship {
    delivery() {
        return "Entrega por água";
    }
}
const truck = new Truck();
console.log(truck.delivery());
const ship = new Ship();
console.log(ship.delivery());

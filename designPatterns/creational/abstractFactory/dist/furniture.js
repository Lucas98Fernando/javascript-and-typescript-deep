"use strict";
class ArtDecoFurnitureFactory {
    createChair() { return new ArtDecoChair(); }
    createCouch() { return new ArtDecoCouch(); }
    createCoffeeTable() { return new ArtDecoCoffeTable(); }
}
class ModernFurnitureFactory {
    createChair() { return new ModernChair(); }
    createCouch() { return new ModernCouch(); }
    createCoffeeTable() { return new ModernCoffeTable(); }
}
class VictorianFurnitureFactory {
    createChair() { return new VictorianChair(); }
    createCouch() { return new VictorianCouch(); }
    createCoffeeTable() { return new VictorianCoffeTable(); }
}
class ArtDecoChair {
    hasLegs() { return true; }
    info() { return "Cadeira do tipo Art Deco"; }
}
class ModernChair {
    hasLegs() { return true; }
    info() { return "Cadeira do tipo Moderno"; }
}
class VictorianChair {
    hasLegs() { return true; }
    info() { return "Cadeira do tipo Vitoriana"; }
}
class ArtDecoCouch {
    hasArms() { return true; }
    info() { return "Sofá do tipo Art Déco"; }
}
class ModernCouch {
    hasArms() { return true; }
    info() { return "Sofá do tipo Moderno"; }
}
class VictorianCouch {
    hasArms() { return true; }
    info() { return "Sofá do tipo Vitoriano"; }
}
class ArtDecoCoffeTable {
    hasLegs() { return true; }
    info() { return "Mesa de café do tipo Art Déco"; }
}
class ModernCoffeTable {
    hasLegs() { return true; }
    info() { return "Mesa de café do tipo Moderno"; }
}
class VictorianCoffeTable {
    hasLegs() { return true; }
    info() { return "Mesa de café do tipo Vitoriano"; }
}
function furnitureClient(factory) {
    const chair = factory.createChair();
    const couch = factory.createCouch();
    const coffeTable = factory.createCoffeeTable();
    console.log(chair.info());
    console.log(couch.info());
    console.log(coffeTable.info());
}
furnitureClient(new ModernFurnitureFactory());

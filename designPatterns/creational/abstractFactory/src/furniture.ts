interface IChair { hasLegs(): boolean, info(): string }
interface ICouch { hasArms(): boolean, info(): string }
interface ICoffeeTable { hasLegs(): boolean, info(): string }

interface IFurnitureFactory {
    createChair(): IChair
    createCouch(): ICouch
    createCoffeeTable(): ICoffeeTable
}

class ArtDecoFurnitureFactory implements IFurnitureFactory {
    createChair(): IChair { return new ArtDecoChair() }
    createCouch(): ICouch { return new ArtDecoCouch() }
    createCoffeeTable(): ICoffeeTable { return new ArtDecoCoffeTable() }
}

class ModernFurnitureFactory implements IFurnitureFactory {
    createChair(): IChair { return new ModernChair() }
    createCouch(): ICouch { return new ModernCouch() }
    createCoffeeTable(): ICoffeeTable { return new ModernCoffeTable() }
}

class VictorianFurnitureFactory implements IFurnitureFactory {
    createChair(): IChair { return new VictorianChair() }
    createCouch(): ICouch { return new VictorianCouch() }
    createCoffeeTable(): ICoffeeTable { return new VictorianCoffeTable() }
}

class ArtDecoChair implements IChair {
    hasLegs(): boolean { return true }
    info(): string { return "Cadeira do tipo Art Deco" }
}

class ModernChair implements IChair {
    hasLegs(): boolean { return true }
    info(): string { return "Cadeira do tipo Moderno" }
}

class VictorianChair implements IChair {
    hasLegs(): boolean { return true }
    info(): string { return "Cadeira do tipo Vitoriana" }
}

class ArtDecoCouch implements ICouch {
    hasArms(): boolean { return true }
    info(): string { return "Sofá do tipo Art Déco" }
}

class ModernCouch implements ICouch {
    hasArms(): boolean { return true }
    info(): string { return "Sofá do tipo Moderno" }
}

class VictorianCouch implements ICouch {
    hasArms(): boolean { return true }
    info(): string { return "Sofá do tipo Vitoriano" }
}

class ArtDecoCoffeTable implements ICoffeeTable {
    hasLegs(): boolean { return true }
    info(): string { return "Mesa de café do tipo Art Déco" }
}

class ModernCoffeTable implements ICoffeeTable {
    hasLegs(): boolean { return true }
    info(): string { return "Mesa de café do tipo Moderno" }
}

class VictorianCoffeTable implements ICoffeeTable {
    hasLegs(): boolean { return true }
    info(): string { return "Mesa de café do tipo Vitoriano" }
}

function furnitureClient(factory: IFurnitureFactory) {
    const chair = factory.createChair()
    const couch = factory.createCouch()
    const coffeTable = factory.createCoffeeTable()

    console.log(chair.info())
    console.log(couch.info())
    console.log(coffeTable.info())
}

furnitureClient(new ModernFurnitureFactory())

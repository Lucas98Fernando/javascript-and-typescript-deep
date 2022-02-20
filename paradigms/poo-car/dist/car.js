"use strict";
class Car {
    constructor(name, chassi, model, color = "Prata") {
        this.name = name;
        this.chassi = chassi;
        this.model = model;
        this.color = color;
    }
    getChassi() {
        return this.chassi;
    }
    setColor(newColor) {
        return this.color = newColor;
    }
    info() {
        return `O ${this.model} ${this.name} possui a cor ${this.color} e o número do chassi ${this.chassi}`;
    }
}
const uno = new Car("Uno", 87264, "Fiat", "Vermelho");
uno.setColor("Azul");
const onix = new Car("Onix", 26362, "Chevrolet");
console.log(uno.info());
console.log(onix.info());

class Car {
    public name: String
    private chassi: number
    public model: String
    public color: String

    constructor(name: String, chassi: number, model: String, color: String = "Prata") {
        this.name = name
        this.chassi = chassi
        this.model = model
        this.color = color
    }

    public getChassi(): number {
        return this.chassi
    }

    public setColor(newColor: string): string {
        return this.color = newColor
    }

    public info(): string {
        return `O ${this.model} ${this.name} possui a cor ${this.color} e o número do chassi ${this.chassi}`
    }
}

const uno = new Car("Uno", 87264, "Fiat", "Vermelho")
uno.setColor("Azul")

const onix = new Car("Onix", 26362, "Chevrolet")

console.log(uno.info())
console.log(onix.info())
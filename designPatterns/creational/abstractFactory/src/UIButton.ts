interface IButton { showMessage(): string }
interface ICheckbox { showMessage(): string }
interface IGUIFactory {
    createButton(): IButton, createCheckbox(): ICheckbox
}

function readAppConfigFile() { return { os: "MacOS" } }

class WindowsFactory implements IGUIFactory {
    createButton(): IButton { return new WindowsButton() }
    createCheckbox(): ICheckbox { return new WindowsCheckbox() }
}

class MacFactory implements IGUIFactory {
    createButton(): IButton { return new MacButton() }
    createCheckbox(): ICheckbox { return new MacCheckbox() }
}

class WindowsButton implements IButton {
    showMessage(): string { return "Botão do Windows" }
}

class WindowsCheckbox implements ICheckbox {
    showMessage(): string { return "Checkbox do Windows" }
}

class MacButton implements IButton {
    showMessage(): string { return "Botão do MacOS" }
}

class MacCheckbox implements ICheckbox {
    showMessage(): string { return "Checkbox do MacOS" }
}

class Application {
    private factory: IGUIFactory
    private button!: IButton
    private checkbox!: ICheckbox

    constructor(factory: IGUIFactory) {
        this.factory = factory
        this.createUI()
    }

    createUI() {
        this.button = this.factory.createButton()
        this.checkbox = this.factory.createCheckbox()
    }

    showInfo() {
        return this.button.showMessage()
    }
}

class ApplicationConfig {
    private factory!: IGUIFactory
    private config = readAppConfigFile()

    main(): IGUIFactory {
        switch (this.config.os) {
            case "MacOS":
                this.factory = new MacFactory()
                break
            case "Windows":
                this.factory = new WindowsFactory()
                break
            default:
                throw new Error("Não foi possível encontrar o sistema operacional")
        }
        return this.factory
    }
}

const currentOS = new ApplicationConfig().main()
const app = new Application(currentOS)
console.log(app.showInfo())

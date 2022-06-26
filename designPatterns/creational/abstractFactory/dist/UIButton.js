"use strict";
function readAppConfigFile() { return { os: "MacOS" }; }
class WindowsFactory {
    createButton() { return new WindowsButton(); }
    createCheckbox() { return new WindowsCheckbox(); }
}
class MacFactory {
    createButton() { return new MacButton(); }
    createCheckbox() { return new MacCheckbox(); }
}
class WindowsButton {
    showMessage() { return "Botão do Windows"; }
}
class WindowsCheckbox {
    showMessage() { return "Checkbox do Windows"; }
}
class MacButton {
    showMessage() { return "Botão do MacOS"; }
}
class MacCheckbox {
    showMessage() { return "Checkbox do MacOS"; }
}
class Application {
    constructor(factory) {
        this.factory = factory;
        this.createUI();
    }
    createUI() {
        this.button = this.factory.createButton();
        this.checkbox = this.factory.createCheckbox();
    }
    showInfo() {
        return this.button.showMessage();
    }
}
class ApplicationConfig {
    constructor() {
        this.config = readAppConfigFile();
    }
    main() {
        switch (this.config.os) {
            case "MacOS":
                this.factory = new MacFactory();
                break;
            case "Windows":
                this.factory = new WindowsFactory();
                break;
            default:
                throw new Error("Não foi possível encontrar o sistema operacional");
        }
        return this.factory;
    }
}
const currentOS = new ApplicationConfig().main();
const app = new Application(currentOS);
console.log(app.showInfo());

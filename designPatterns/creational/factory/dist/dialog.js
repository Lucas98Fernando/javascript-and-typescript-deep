"use strict";
function readAppConfigFile() {
    return {
        OS: "Web"
    };
}
class Dialog {
    render() {
        const okButton = this.createButton();
        okButton.render();
        okButton.onClick(() => { });
    }
}
class WindowsDialog extends Dialog {
    createButton() {
        return new WindowsButton();
    }
}
class HTMLDialog extends Dialog {
    createButton() {
        return new HTMLButton();
    }
}
class WindowsButton {
    render() {
        console.log("Botão do Windows");
    }
    onClick(fn) {
        console.log("Fechar o dialog do Windows");
    }
}
class HTMLButton {
    render() {
        console.log("Botão da Web");
    }
    onClick(fn) {
        console.log("Fechar o dialog da Web");
    }
}
class Application {
    static initialize() {
        switch (this.config.OS) {
            case "Windows":
                this.dialog = new WindowsDialog();
                break;
            case "Web":
                this.dialog = new HTMLDialog();
                break;
            default:
                throw new Error("Não foi possível localizar o sistema operacional");
        }
    }
    static main() {
        this.initialize();
        this.dialog.render();
    }
}
Application.config = readAppConfigFile();
const app = Application.main();

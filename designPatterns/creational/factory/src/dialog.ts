interface IButton {
    render(): void
    onClick(fn: Function): void
}

function readAppConfigFile() {
    return {
        OS: "Web"
    }
}

abstract class Dialog {
    public abstract createButton(): IButton

    public render(): void {
        const okButton: IButton = this.createButton();
        okButton.render()
        okButton.onClick(() => {})
    }
}

class WindowsDialog extends Dialog {
    public createButton(): IButton {
        return new WindowsButton();
    }
}

class HTMLDialog extends Dialog {
    public createButton(): IButton {
        return new HTMLButton();
    }
}

class WindowsButton implements IButton {
    public render() {
        console.log("Botão do Windows");
    }

    public onClick(fn: Function): void {
        console.log("Fechar o dialog do Windows")
    }
}

class HTMLButton implements IButton {
    public render() {
        console.log("Botão da Web");
    }

    public onClick(fn: Function): void {
        console.log("Fechar o dialog da Web")
    }
}

class Application {
    public static dialog: Dialog;
    public static config = readAppConfigFile()

    private static initialize(): void {
        switch (this.config.OS) {
            case "Windows":
                this.dialog = new WindowsDialog();
                break
            case "Web":
                this.dialog = new HTMLDialog();
                break
            default:
                throw new Error("Não foi possível localizar o sistema operacional")
        }
    }

    static main() {
        this.initialize()
        this.dialog.render()
    }
}

const app = Application.main();

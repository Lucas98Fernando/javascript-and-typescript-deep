export class MyXYZEmailService implements IEmailService {
    sendEmail(email: string, title: string, message: string): void {
        console.log("MyXYZEmailService", email, title, message);
    }
}

export class MyDTOEmailService implements IEmailService {
    sendEmail(email: string, title: string, message: string): void {
        console.log("MyDTOEmailService", email, title, message);
    }
}

class ContructorInjection {
    private _emailService: IEmailService;

    constructor(emailService: IEmailService) {
        this._emailService = emailService;
    }

    public sendEmail(email: string, title: string, message: string): void {
        this._emailService.sendEmail(email, title, message)
    }
}

const cliente = new ContructorInjection(new MyDTOEmailService).sendEmail("lucas@gmail.com", "E-mail", "Mensagem do e-mail")
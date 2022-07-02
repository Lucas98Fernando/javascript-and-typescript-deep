"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyDTOEmailService = exports.MyXYZEmailService = void 0;
class MyXYZEmailService {
    sendEmail(email, title, message) {
        console.log("MyXYZEmailService", email, title, message);
    }
}
exports.MyXYZEmailService = MyXYZEmailService;
class MyDTOEmailService {
    sendEmail(email, title, message) {
        console.log("MyDTOEmailService", email, title, message);
    }
}
exports.MyDTOEmailService = MyDTOEmailService;
class ContructorInjection {
    constructor(emailService) {
        this._emailService = emailService;
    }
    sendEmail(email, title, message) {
        this._emailService.sendEmail(email, title, message);
    }
}
const cliente = new ContructorInjection(new MyDTOEmailService).sendEmail("lucas@gmail.com", "E-mail", "Mensagem do e-mail");

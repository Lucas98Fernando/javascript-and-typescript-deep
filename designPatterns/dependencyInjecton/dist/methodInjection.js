"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const contructorInjection_1 = require("./contructorInjection");
class MethodInjection {
    sendEmail(email, title, message, emailService) {
        emailService.sendEmail(email, title, message);
    }
}
const dto = new contructorInjection_1.MyDTOEmailService();
const methodInjection = new MethodInjection();
methodInjection.sendEmail("lucas@hotmail.com", "Seja bem-vindo!", "Cadastro realizado", dto);

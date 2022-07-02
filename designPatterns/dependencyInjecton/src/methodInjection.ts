import { MyDTOEmailService } from "./contructorInjection"

class MethodInjection {
    public sendEmail(email: string, title: string, message: string, emailService: IEmailService) {
        emailService.sendEmail(email, title, message)
    }
}

const dto = new MyDTOEmailService()
const methodInjection = new MethodInjection()

methodInjection.sendEmail(
    "lucas@hotmail.com",
    "Seja bem-vindo!",
    "Cadastro realizado",
    dto
)
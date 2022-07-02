interface IEmailService {
    sendEmail(email: string, title: string, message: string): void
}
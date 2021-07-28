import { IMailProvider, IMessage } from "../IMailProvider";
import nodemailer from 'nodemailer';
import Mail from "nodemailer/lib/mailer";

export class MailtrapMailProvider implements IMailProvider {
    private transport: Mail;

    constructor() {
        this.transport = nodemailer.createTransport({
            host: "smtp.mailtrap.io",
            port: 2525,
            auth: {
              user: "d71d584486eea7",
              pass: "85c3d7dc3a056b"
            }
          });
    }

    async sendMail(message: IMessage): Promise<void> {
        this.transport.sendMail({
            to: {
                name: message.to.name,
                address: message.to.email,
            },
            from: {
                name: message.from.name,
                address: message.from.email,
            },
            subject: message.subject,
            html: message.body,
        });
    }
}
import { Request, Response } from 'express';
import nodemailer from 'nodemailer';

export const contato = async (req: Request, res: Response) => {
    //Passo 1: Configurar o tansporter

    let transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "a939d0dd7e0738",
        pass: "a9575ef698c3ee"
    }
    });
    //Passo 2: Configurar a mensagem
    let message = {
        from: 'nao-responda@ishizuka.com',
        to: 'teste@gmail.com',
        replyTo: req.body.from,
        subject: req.body.subject,
        html: req.body.email,
        text: req.body.email
    }

    //Passo 3: Enviar a mensagem
    let info = await transport.sendMail(message);

    console.log('info', info);

    res.json({pong: true});
}
export default function Contact(req, res) {

    const nodeoutlook = require('nodejs-nodemailer-outlook')

    const MAIL = {
        from: process.env.MAIL_FROM,
        to: process.env.MAIL_TO,
        nome: req.body.nome,
        email: req.body.email,
        mensagem: req.body.mensagem
    }

    nodeoutlook.sendEmail({
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASSWORD,
        },
        from: MAIL.from,
        to: MAIL.to,
        subject: `Site Microben - DE: ${MAIL.nome}`,
        html: '<b>This is bold text</b>',
        text: req.body.mensagem + " | Sent from: " + MAIL.email,
        html: `<div>${MAIL.mensagem}</div><p>Enviado por: ${MAIL.email}</p>`,
        //replyTo: 'receiverXXX@gmail.com',
        onError: (e) => {
            console.log(e)
            res.status(500)
        },
        onSuccess: (i) => {
            console.log(i)
            res.status(200).json(MAIL)
        }

    })
}
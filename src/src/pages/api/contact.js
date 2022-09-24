export default function Contact(req, res) {

    const nodeoutlook = require('nodejs-nodemailer-outlook')

    nodeoutlook.sendEmail({
        auth: {
            user: "andre@microben.com.br",
            pass: process.env.password,
        },
        from: 'andre@microben.com.br',
        to: 'mary@microben.com.br',
        subject: `Site Microben - DE: ${req.body.nome}`,
        html: '<b>This is bold text</b>',
        text: req.body.mensagem + " | Sent from: " + req.body.email,
        html: `<div>${req.body.mensagem}</div><p>Sent from: ${req.body.email}</p>`,
        //replyTo: 'receiverXXX@gmail.com',
        onError: (e) => {
            console.log(e)
            res.status(500)
        },
        onSuccess: (i) => {
            console.log(i)
            res.status(200).json({ name: 'John Doe' })
        }

    })
}
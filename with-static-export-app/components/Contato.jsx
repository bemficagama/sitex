import { Form, Group, Button } from "react-bootstrap";
import { useState } from 'react'

export default function Contato() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [mensagem, setMensagem] = useState('')
    const [submitted, setSubmitted] = useState(false)

    function reset() {
        console.log('Response succeeded!')
        setSubmitted(true)
        setNome('')
        setEmail('')
        setMensagem('')
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Sending')
        let data = {
            nome,
            email,
            mensagem
        }
        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => {
            console.log('Response received')
            if (res.status === 200) {
                reset()
            }
        })
    }

    return (
        <div>
            <h4 className="text-danger text-center" id="contato">CONTATO</h4>
            <h3 className="text-center">Mande uma mensagem</h3>
            <div id="contato" className="row justify-content-md-center">
                <div className="col col-lg-4">
                    <Form>
                        <Form.Group className="mb-3" controlId="contato_nome">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control name='nome' value={nome} type="input" onChange={(e) => { setNome(e.target.value) }} placeholder="Seu Nome" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="contato_email">
                            <Form.Label>Endereço de Email</Form.Label>
                            <Form.Control name='email' value={email} type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Seu e-Mail" />
                            <Form.Text className="text-muted">
                                Nunca compartilharemos seu e-mail com mais ninguém.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="contato_mensagem">
                            <Form.Label>Mensagem</Form.Label>
                            <Form.Control name='mensagem' value={mensagem} onChange={(e) => { setMensagem(e.target.value) }} as="textarea" rows={3} />
                        </Form.Group>
                        <Button onClick={(e) => { handleSubmit(e) }} className="mb-3" variant="primary" type="submit">
                            Enviar
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    )
}
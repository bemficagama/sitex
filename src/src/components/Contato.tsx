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

    const handleSubmit = (e: any) => {
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
        < div >
            <h4 className="text-danger text-center" id="contato">CONTATO</h4>
            <h3 className="text-center">Mande uma mensagem</h3>
            <div id="contato" className="row justify-content-md-center">
                <div className="col col-lg-4">
                    <form onSubmit={handleSubmit}>
                        <div className="input-group" >
                            <span className="input-group-text">Nome</span>
                            <input type="text" className='form-control' name='nome' value={nome} onChange={(e) => { setNome(e.target.value) }} placeholder="Seu Nome"  minLength={3} required />
                        </div>
                        <div className="input-group mt-3" >
                            <span className="input-group-text">e-Mail</span>
                            <input type="email" className='form-control' name='email' value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="Seu e-Mail" required />
                        </div>
                        <span>
                            Nunca compartilharemos seu e-mail com mais ninguém.
                        </span>
                        <div className="input-group mb-3" >
                            <span className="input-group-text">Mensagem</span>
                            <textarea className='form-control' rows={3} value={mensagem} onChange={(e) => { setMensagem(e.target.value) }} placeholder="Digite a Mensagem" minLength={10} required />
                        </div>
                        <button className="mb-3 primary" type="submit">
                            Enviar
                        </button>
                    </form>
                </div>
            </div>
        </div >
    )
}
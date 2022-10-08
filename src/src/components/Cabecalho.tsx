import styles from '../styles/Cabecalho.module.css'
import Image from 'next/image'
import logoCabecalho from '../../public/img/logo_cabecalho.png'

export default function Cabecalho() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#home">
                        <Image src={logoCabecalho} alt="Logotipo Microben" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#basic-navbar-nav" aria-controls="basic-navbar-nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="basic-navbar-nav">
                        <ul className="navbar-nav">
                            <li className="nav-item"><a className="nav-link" aria-current="page" href="#quemsomos" >A microben</a></li>
                            <li className="nav-item"><a className="nav-link" aria-current="page" >Serviços</a></li>
                            <li className="nav-item"><a className="nav-link" aria-current="page" href="#contato">Contato</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
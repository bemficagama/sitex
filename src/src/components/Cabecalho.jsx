import styles from '../styles/Cabecalho.module.css'
import { Nav, Navbar, Container } from 'react-bootstrap'
import Image from 'next/image'
import logoCabecalho from '../../public/img/logo_cabecalho.png'

export default function Cabecalho() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <Image src={logoCabecalho} alt="Logotipo Microben" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#quemsomos">A microben</Nav.Link>
                            <Nav.Link href="#servicos_icons">Serviços</Nav.Link>
                            <Nav.Link href="#contato">Contato</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
import styles from '../styles/NossosServicos.module.css'
import { Container, Row, Col } from 'react-bootstrap'

export default function NossosServicos() {
    return (
        <div>
        <hr/>
            <Container className="mb-3">
                <Row>
                    <Col sm={3}></Col>
                    <Col sm={6}>
                        <h5 className="text-danger">O QUE FAZEMOS</h5>
                        <h2>NOSSOS SERVIÇOS</h2>
                        <p className="card-text">Serviços com garantia e qualidade técnica. Atualização constante
                            de certificações das maiores marcas do mundo.
                            Acompanhamento e Controle dos serviços através de nossa
                            plataforma de controle de ordens serviços.</p>
                        <p className="card-text"><small className="text-muted">Leia mais</small></p>
                    </Col>
                    <Col sm={3}></Col>
                </Row>
            </Container>
        </div>
    )
}
import styles from '../styles/QuemSomos.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'
import logoHistoria from '../public/img/logo_historia.png'

export default function QuemSomos() {
    return (
        <div>
        <hr/>
            <Container className="mb-3" id="quemsomos">
                <Row>
                    <Col sm={2}></Col>
                    <Col sm={7}>
                        <h5 className="card-title text-danger">QUEM SOMOS</h5>
                        <h2>NOSSA HISTÓRIA</h2>
                        <p className="card-text">A Microben atua no segmento de tecnologia desde o ano 2000,
                            oferecendo primeiramente serviços de consultoria e manutenção
                            em equipamentos de informática. Ao longo desse período ganhou
                            credibilidade e respeito no mercado por oferecer produtos
                            de alta qualidade, com parceria das mais renomadas marcas
                            e serviços altamente especializados com certificação e excelência.
                            Nesse segmento trabalha com vendas de equipamentos,
                            servidores, rede, segurança e energia solar, com um nível
                            de experiência Sênior nos serviços que oferece.</p>
                        <p className="card-text"><small className="text-muted">Leia mais</small></p>
                    </Col>
                    <Col sm={3} className="align-self-center">
                        <Image src={logoHistoria} className="card-img" alt="..." />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
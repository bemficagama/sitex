import styles from '../styles/CarrosselPrincipal.module.css'
import Image from 'next/image'
import bannerPaineis from '../../public/img/banner_paineis.jpeg'
import bannerSolucao from '../../public/img/banner_solucao.jpeg'
import bannerVendas from '../../public/img/banner_vendas.jpeg'

import Carousel from 'react-bootstrap/Carousel'


export default function CarrosselPrincipal() {
    return (
        <div>
            <div style={{ display: 'block', padding: 30 }}>
                <Carousel>
                    <Carousel.Item interval={2000}>
                        <Image src={bannerPaineis} className="d-block w-100" alt="..." />
                        <Carousel.Caption>
                            <h1 className="display-3">PAINEIS</h1>
                            <h1 className="display-3">SOLARES</h1>
                            <h2>ECONOMIA E SUSTENTABILIDADE</h2>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <Image src={bannerSolucao} className="d-block w-100" alt="..." />
                        <Carousel.Caption>
                            <h1 className="display-3">SOLUÇÕES DE PROBLEMAS</h1>
                            <h2>CONSULTORIA ESTRATÉGICA PARA SUA EMPRESA</h2>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <Image src={bannerVendas} className="d-block w-100" alt="..." />
                        <Carousel.Caption>
                            <h1 className="display-3">VENDA DIRETA E ESPECIALIZADA</h1>
                            <h2>COM AS MELHORES MARCAS DO MERCADO</h2>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}
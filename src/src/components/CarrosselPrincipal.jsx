import styles from '../styles/CarrosselPrincipal.module.css'
import Image from 'next/image'
import bannerPaineis from '../../public/img/banner_paineis.jpeg'
import bannerSolucao from '../../public/img/banner_solucao.jpeg'
import bannerVendas from '../../public/img/banner_vendas.jpeg'

export default function CarrosselPrincipal() {
    return (
        <div style={{display: 'block', padding: 30}}>
            <div id="carousel-principal" className="carousel slide" data-bs-ride="carousel" >
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carousel-principal" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carousel-principal" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carousel-principal" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="2000">
                        <Image src={bannerPaineis} className="d-block w-100" alt="..." />
                        <div className="carousel-caption">
                            <h1 className="display-3">PAINEIS</h1>
                            <h1 className="display-3">SOLARES</h1>
                            <h2>ECONOMIA E SUSTENTABILIDADE</h2>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <Image src={bannerSolucao} className="d-block w-100" alt="..." />
                        <div className="carousel-caption">
                            <h1 className="display-3">SOLUÇÕES DE PROBLEMAS</h1>
                            <h2>CONSULTORIA ESTRATÉGICA PARA SUA EMPRESA</h2>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <Image src={bannerVendas} className="d-block w-100" alt="..." />
                        <div className="carousel-caption">
                            <h1 className="display-3">VENDA DIRETA E ESPECIALIZADA</h1>
                            <h2>COM AS MELHORES MARCAS DO MERCADO</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
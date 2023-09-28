//import styles from '../styles/QuemSomos.module.css'
import Image from 'next/image'
import logoHistoria from '../../assets/img/logo_historia.png'

export default function QuemSomos() {
    return (
        <div>
            <hr />
            <div className="d-flex" id="quemsomos" >
                <div className="p-2 w-50">
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
                </div>
                <div className="d-flex flex-grow-1 justify-content-center">
                    <div>
                        <Image src={logoHistoria} className="card-img" alt="..." />
                    </div>
                </div>

            </div>
        </div>
    )
}
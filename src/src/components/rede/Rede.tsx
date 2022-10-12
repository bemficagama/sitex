//import styles from '../styles/QuemSomos.module.css'
import Image from 'next/image'
import Link from 'next/link'
import fundoRede from '../../../public/img/fundo_rede.jpg'

export default function Rede() {
    return (
        <div>
            <div className='row m-3'>
                <div className='col'>
                    <figure className="figure w-50 float-start m-3" >
                        <Image src={fundoRede} className="figure-img rounded img-thumbnail" alt="..." />
                    </figure>
                    <h2>
                        <Link href="/rede">
                            <a>
                                Rede Lógica e Infraestrutura
                            </a>
                        </Link>
                    </h2>
                    <p>
                        Somos especialistas em soluções de rede:
                        Mikrotik, Rede Wi-Fi Profissional, Firewall Empresarial, Cabeamento
                        Estruturado, Infraestrutura, Análise de Tráfego e outros.
                    </p>
                    <p>
                        Realizamos Projeto de Rede, levantamento de
                        necessidades, indicação das melhores soluções de serviços e equipamentos
                        com melhor custo benefício.
                    </p>
                </div>
            </div>
        </div >
    )
}
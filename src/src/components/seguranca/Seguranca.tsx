//import styles from '../styles/QuemSomos.module.css'
import Image from 'next/image'
import Link from 'next/link'
import fundoSeguranca from '../../../public/img/fundo_seguranca.jpg'

export default function Seguranca() {
    return (
        <div>
            <div className='row m-3'>
                <div className='col'>
                    <figure className="figure w-50 float-end m-3" >
                        <Image src={fundoSeguranca} className="figure-img rounded img-thumbnail" alt="..." />
                    </figure>
                    <h2>
                        <Link href="/seguranca">
                            <a>
                                Segurança: Segurança por Vídeo, Controle de Acesso e Alarme
                            </a>
                        </Link>
                    </h2>
                    <p>Segurança é essencial, seja qual for o tamanho
                        do negócio ou residência, fornecemos soluções em CFTV (Vigilância
                        por Vídeo) de alta qualidade e tecnologia, Controle de Acesso Profissional
                        e Alarmes. Soluções inteligentes, um único software de gerenciamento
                        para controlar todos os ativos de segurança, integrando-os.
                    </p>
                    <p>Realizamos teste de segurança de sistemas e rede,
                        para identificar possíveis falhas.
                    </p>
                    <h5>Para maiores detalhes selecione</h5>

                    <ul>
                        <li><Link href="/seguranca/cftv"><a>CFTV</a></Link></li>
                        <li><Link href="#"><a>Controle de Acesso</a></Link></li>
                        <li><Link href="#"><a>Alarme</a></Link></li>
                    </ul>
                </div>
            </div>
        </div >
    )
}
import Image from 'next/image'
import Link from 'next/link'
import fundoEnergia from '../../../public/img/fundo_energia.jpg'

export default function Energia() {
    return (
        <div>
            <div className='row m-3'>
                <div className='col'>
                    <figure className="figure w-50 float-start m-3" >
                        <Image src={fundoEnergia} className="figure-img rounded img-thumbnail" alt="..." />
                    </figure>
                    <h2>
                        <Link href="/energia">
                            <a>
                                Energia Solar
                            </a>
                        </Link>
                    </h2>
                    <p>
                        A utilização da Energia Solar só trás vantagens, a
                        ajuda ao Meio Ambiente, reduzindo a criação de novas usinas a base de
                        combustível fóssil, o lado de economia, onde poderá reduzir em até 95%
                        a conta de energia, gerando crédito para uso posterior ou compartilhado.
                        Não importa o atrativo, temos os melhores equipamentos do mundo, com
                        instalação técnica profissional.
                    </p>
                </div>
            </div>
        </div >
    )
}
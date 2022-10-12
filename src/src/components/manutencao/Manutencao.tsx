import Image from 'next/image'
import Link from 'next/link'
import fundoManutencao from '../../../public/img/fundo_manutencao.jpg'

export default function Manutencao() {
    return (
        <div>
            <div className='row m-3'>
                <div className='col'>
                    <figure className="figure w-50 float-end m-3" >
                        <Image src={fundoManutencao} className="figure-img rounded img-thumbnail" alt="..." />
                    </figure>
                    <h2>
                        <Link href="/manutencao">
                            <a>
                                Manutenção de TI e Informática
                            </a>
                        </Link>
                    </h2>
                    <p>
                        Independente da área de atuação e tamanho da empresa
                        ou residência, a Manutenção de TI é fundamental. Mesmo com as melhores
                        metodologias de gerência sempre deve-se deixar tudo atualizado e em perfeito
                        funcionamento.
                    </p>
                    <p>
                        A Manutenção de TI baseia-se em processos e atividades
                        aplicados a sistemas e equipamentos. Tendo como objetivos manter tudo com
                        máxima eficácia, disponibilidade e segurança.
                    </p>
                </div>
            </div>
        </div >
    )
}
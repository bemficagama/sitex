//import styles from '../styles/QuemSomos.module.css'
import Image from 'next/image'
import Link from 'next/link'
import fundoVenda from '../../../public/img/fundo_venda.jpg'

export default function Venda() {
    return (
        <div>
            <div className='row m-3'>
                <div className='col'>
                    <figure className="figure w-50 float-start m-3" >
                        <Image src={fundoVenda} className="figure-img rounded img-thumbnail" alt="..." />
                    </figure>
                    <h2>
                        <Link href="/venda">
                            <a>
                                Vendas: Venda Direta e Especializada
                            </a>
                        </Link>
                    </h2>
                    <p>
                        Com 20 anos de experiência no mercado de tecnologia
                        possuímos Know-how para realizar uma análise das necessidades e propormos
                        soluções que visam melhorar e indicar alternativa para alcançar os objetivos,
                        indicar o melhor o custo benefício no cenário atual e futuro.
                    </p>
                    <p>
                        Possuímos parceria com os maiores Distribuidores e realizamos
                        Venda Direta, o pedido sai diretamente do Distribuidor para o Cliente Final,
                        reduzindo o valor final, contudo ainda acompanhando o Pedido até que seja
                        completamente entregue.
                    </p>
                </div>
            </div>
        </div >
    )
}
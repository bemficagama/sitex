import Image from 'next/image'
import Link from 'next/link'
import fundoDesenvolvimento from '../../assets/img/fundo_desenvolvimento.jpg'

export default function Desenvolvimento() {
    return (
        <div>
            <div className='row m-3'>
                <div className='col'>
                    <figure className="figure w-50 float-start m-3" >
                        <Image src={fundoDesenvolvimento} className="figure-img rounded img-thumbnail" alt="..." />
                    </figure>
                    <h2>
                        <Link href="/energia">Desenvolvimento</Link>
                    </h2>
                    <p>
                        Desenvolvimento de sistemas utilizando as melhores práticas
                        de Engenharia de Software e os mais renomados Frameworks do 
                        mercado. Entrega sistematizada em Sprints, dando o conforto 
                        de utilização e ou testes com menor espaço de tempo, menor 
                        custo. Confeccionamos sistemas simples como sites e pequenos módulos para 
                        sites até grandes aplicativos complexos.
                    </p>
                </div>
            </div>
        </div >
    )
}
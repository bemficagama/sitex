//import styles from '../styles/QuemSomos.module.css'
import Image from 'next/image'
import pageAlarme from '../../../public/img/page_alarme.jpg'

export default function Alarme() {
    return (
        <div>
            <div className='row m-3'>
                <div className='col'>
                    <figure className="figure w-50 float-end m-3" >
                        <Image src={pageAlarme} className="figure-img rounded img-thumbnail" alt="..." />
                    </figure>
                    <h5 className="text-danger">PROTEGER UM PERÍMETRO, LOCAL</h5>
                    <h2>Alarmes</h2>
                    <p className="card-text">
                        Um sistema de alarme é um conjunto de equipamentos eletroeletrônicos e de software 
                        que tem por finalidade informar a violação do perímetro ou local protegido, através 
                        de sinal sonoro, visual e remoto.
                    </p>
                    <p>
                        É um dos meios mais eficientes e baratos para prevenir acessos não autorizados, 
                        detectar incêndios, situações de perigo, etc.
                    </p>
                    <p>
                        Sistemas de alarmes, além de eficientes na prática, ainda afastam os perigos. Os 
                        invasores observam muito bem os costumes e horários dos ocupantes e principalmente 
                        os recursos de segurança de que o imóvel dispõe antes de realizar uma ação. 
                        Normalmente escolhem imóveis que não possuem recursos de segurança para atacarem.
                    </p>
                    <p>
                        Escolher bem um sistema de segurança e a empresa ou profissional que vai prestar 
                        os serviços de instalação é o ponto fundamental para a obtenção de bons resultados. 
                        De nada adianta ter modernos equipamentos, se estes forem instalados sem qualquer 
                        critério. Neste caso, o sofisticado sistema de segurança não demorará muito para 
                        revelar-se num grande problema. Para evitar problemas é fundamental que se realize 
                        um projeto de segurança. A experiência de técnicos especializados no assunto evita 
                        que dinheiro seja desperdiçado e garante que o equipamento instalado funcione 
                        adequadamente.
                    </p>
                </div>
            </div>
        </div>
    )
}
//import styles from '../styles/QuemSomos.module.css'
import Image from 'next/image'
import pageCftv from '../../../public/img/page_cftv.jpg'

export default function Cftv() {
    return (
        <div>
            <div className='row m-3'>
                <div className='col'>
                    <figure className="figure w-50 float-end m-3" >
                        <Image src={pageCftv} className="figure-img rounded img-thumbnail" alt="..." />
                    </figure>
                    <h5 className="text-danger">VIGILÂNCIA POR VÍDEO</h5>
                    <h2>CFTV</h2>
                    <p className="card-text">O CFTV é utilizado principalmente para monitoramento
                        e vigilância, visando registrar incidentes de segurança, vandalismo,
                        comportamento indevido e diversas outras ocorrências. No entanto vem sendo muito
                        utilizado também para outros fins, como monitoramento viário, para fins
                        ambientais, comportamentais, segurança do trabalho, entre outros.
                    </p>
                    <p>
                        Através do uso do CFTV é possível que uma equipe de segurança monitore em
                        tempo real e até remotamente o que está acontecendo em cada ambiente,
                        24 horas por dia, e tome as ações necessárias quando alguma anormalidade é
                        detectada.
                    </p>
                    <p>
                        Além disso, ele possibilita que as imagens registradas fiquem gravadas e que
                        possam ser analisadas posteriormente, auxiliando na identificação de suspeitos
                        e até sendo utilizadas como provas em processos legais.
                    </p>
                    <p>
                        Outra vantagem é que a presença de um sistema CFTV, principalmente devido às
                        câmeras, inibe a ação de criminosos e pessoas mal intencionadas, pois fica claro
                        que tudo que está sendo feito naquele ambiente está sendo monitorado e registrado.
                    </p>
                </div>
            </div>
        </div>
    )
}
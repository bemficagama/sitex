import Image from 'next/image'
import pageControleAcesso from '../../../public/img/page_controle_acesso.jpg'

export default function ControleAcesso() {
    return (
        <div>
            <div className='row m-3'>
                <div className='col'>
                    <figure className="figure w-50 float-start m-3" >
                        <Image src={pageControleAcesso} className="figure-img rounded img-thumbnail" alt="..." />
                    </figure>
                    <h5 className="text-danger">ACESSO SUPERVISIONADO DE AMBIENTES</h5>
                    <h2>Controle de Acesso</h2>
                    <p className="card-text">
                        Controle de acesso diz respeito às tecnologias (hardware e software) que
                        têm como principal função o gerenciamento do acesso a determinados ambientes,
                        especialmente em locais onde exista um fluxo elevado de pessoas, materiais
                        e veículos. É o caso, por exemplo, de empresas, condomínios, academias,
                        instituições de ensino ou qualquer outro local em que o acesso seja restrito.
                    </p>
                    <p>
                        Nesse sentido, o principal objetivo dos sistemas de controle de acesso é
                        impedir a entrada de pessoas não autorizadas, aumentando a segurança e
                        garantindo a integridade de pessoas e bens.
                    </p>
                    <p>
                        Não à toa, o uso de sistema de controle de acesso tem se tornado cada vez mais
                        comum. E isso se explica, em parte, por sua capacidade de aliar alta eficiência,
                        modernidade e simplicidade em uma única solução integrada de segurança.
                    </p>
                </div>
            </div>
        </div>
    )
}
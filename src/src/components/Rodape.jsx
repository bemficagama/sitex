import styles from '../styles/Rodape.module.css'
import Image from 'next/image'
import logoRodape from '../../public/img/logo_rodape.png'

export default function Rodape() {
    return (
        <div className="rodape" >
            <div className="bg-danger">
                <div className="d-flex bd-highlight">
                    <div className="p-2 bd-highlight">
                        <Image src={logoRodape} alt="Logo Microben" />
                    </div>
                </div>
                <div className="d-flex bd-highlight text-white">
                    <div className="p-2 bd-highlight">
                        <h5 className="fas fa-envelope-square"></h5>
                    </div>
                    <div className="p-2 bd-highlight">
                        <h5>vendas@microben.com.br</h5>
                    </div>
                </div>
                <div className="d-flex bd-highlight text-white">
                    <div className="p-2 bd-highlight">
                        <h5 className="fas fa-phone"></h5>

                    </div>
                    <div className="p-2 bd-highlight">
                        <h5><strong>(92) 3302-3404</strong></h5>
                    </div>
                    <div className="p-2 bd-highlight">
                        <h5 className="fas fa-mobile"></h5>
                    </div>
                    <div className="p-2 bd-highlight">
                        <h5><strong>(92) 98823-5697</strong></h5>
                    </div>
                </div>

                <div className="d-flex bd-highlight text-white">
                    <div className="p-2 bd-highlight">
                        <h6 className="fas fa-map-marker-alt"></h6>
                    </div>
                    <div className="p-2 bd-highlight">
                        <h6>Rua Yucatan, Quadra G, Lote 7 - Alvorada</h6>
                        <h6>69042-222</h6>
                    </div>
                    <div className="p-2 bd-highlight">
                        <h6>Manaus - Amazonas</h6>
                    </div>
                    <div className="ms-auto p-2 bd-highlight">
                        <h1 className="fab fa-facebook"></h1>
                        <h1 className="p-2 fab fa-instagram"></h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
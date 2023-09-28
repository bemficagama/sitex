import styles from '../styles/Rodape.module.css'
import { faEnvelopeSquare, faMapMarkedAlt, faMobile, faNetworkWired, faPhone, faServer, faShieldAlt, faSolarPanel } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import logoRodape from '../assets/img/logo_rodape.png'

export default function Rodape() {
    return (
        <div>
            <div className="d-flex bg-danger flex-column">
                <div className='d-flex justify-content-between'>
                    <div className="bd-highlight">
                        <div className="d-flex p-2 bd-highlight">
                            <Image src={logoRodape} alt="Logo Microben" />
                        </div>
                    </div>
                    <div className="d-flex text-white">
                        <div className="p-2">
                            <FontAwesomeIcon icon={faEnvelopeSquare} size='2x' />
                        </div>
                        <div className="p-2">
                            <h5>vendas@microben.com.br</h5>
                        </div>
                    </div>
                    <div className="d-flex bd-highlight text-white">
                        <div className="p-2 bd-highlight">
                            <FontAwesomeIcon icon={faPhone} size='2x' />
                        </div>
                        <div className="p-2 bd-highlight">
                            <h5><strong>(92) 3302-3404</strong></h5>
                        </div>
                        <div className="p-2 bd-highlight">
                            <FontAwesomeIcon icon={faMobile} size='2x' />
                        </div>
                        <div className="p-2 bd-highlight">
                            <h5><strong>(92) 98823-5697</strong></h5>
                        </div>
                    </div>
                </div>
                <div className="d-flex bd-highlight text-white justify-content-between">
                    <div className="d-flex text-white">
                        <div className="p-2 bd-highlight">
                            <FontAwesomeIcon icon={faMapMarkedAlt} size='2x' />
                        </div>
                        <div className="p-2 bd-highlight">
                            <h6>Rua Yucatan, Quadra G, Lote 7 - Alvorada 69.042-222</h6>
                        </div>
                        <div className="p-2 bd-highlight">
                            <h6>Manaus - Amazonas</h6>
                        </div>
                    </div>
                    <div className="p-2 bd-highlight">
                        <div>
                            <FontAwesomeIcon icon={faFacebook} size='3x' className='me-2' />
                            <FontAwesomeIcon icon={faInstagram} size='3x' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
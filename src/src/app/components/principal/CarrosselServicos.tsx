'use client'

import styles from '../styles/CarrosselServicos.module.css'
import Link from 'next/link'
import { faCartShopping, faNetworkWired, faScrewdriver, faScrewdriverWrench, faServer, faShieldAlt, faSolarPanel } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import fundoVenda from '../../assets/img/fundo_venda.jpg'
import fundoServidor from '../../assets/img/fundo_servidor.jpg'
import fundoRede from '../../assets/img/fundo_rede.jpg'
import fundoSeguranca from '../../assets/img/fundo_seguranca.jpg'
import fundoEnergia from '../../assets/img/fundo_energia.jpg'
import fundoManutencao from '../../assets/img/fundo_manutencao.jpg'
import { useState } from 'react';
import Seguranca from '../seguranca/Seguranca'
import Venda from '../venda/Venda'
import Servidor from '../servidor/Servidor'
import Energia from '../energia/Energia'
import Manutencao from '../manutencao/Manutencao'
import Rede from '../rede/Rede'


//<Image src={fundoVenda} className="card-img" alt="..." />

export default function CarrosselServicos() {
    const [index, setIndex] = useState(0)

    function selVendas() {
        setIndex(0)
    }

    function selServidores() {
        setIndex(1)
    }

    function selRedes() {
        setIndex(2)
    }

    function selSeguranca() {
        setIndex(3)
    }

    function selSolar() {
        setIndex(4)
    }

    return (
        <div>
            <div id="servicos_icons" className="d-flex justify-content-around">
                <div className="justify-content-center text-center">
                    <Link href="#" data-bs-target="#carossel-servicos" data-bs-slide-to="0" aria-current="true" aria-label="Slide 0" id="btn1" >
                        <FontAwesomeIcon icon={faCartShopping} size='5x' />
                        <h5 className="text-center">
                            Vendas
                        </h5>
                    </Link>
                </div>
                <div className="justify-content-center text-center">
                    <Link href="#" data-bs-target="#carossel-servicos" data-bs-slide-to="1" aria-label="Slide 1">
                        <FontAwesomeIcon icon={faServer} size='5x' />
                        <h5 className="text-center">
                            Servidores
                        </h5>
                    </Link>
                </div>
                <div className="justify-content-center text-center">
                    <Link href="#" data-bs-target="#carossel-servicos" data-bs-slide-to="2" aria-label="Slide 2">
                        <FontAwesomeIcon icon={faNetworkWired} size='5x' />
                        <h5 className="text-center">
                            Rede
                        </h5>
                    </Link>
                </div>
                <div className="justify-content-center text-center">
                    <Link href="#" data-bs-target="#carossel-servicos" data-bs-slide-to="3" aria-label="Slide 3">
                        <FontAwesomeIcon icon={faShieldAlt} size='5x' />
                        <h5 className="text-center">
                            Segurança
                        </h5>
                    </Link>
                </div>
                <div className="justify-content-center text-center">
                    <Link href="#" data-bs-target="#carossel-servicos" data-bs-slide-to="4" aria-label="Slide 4">
                        <FontAwesomeIcon icon={faSolarPanel} size='5x' />
                        <h5 className="text-center">
                            Energia Solar
                        </h5>
                    </Link>
                </div>
                <div className="justify-content-center text-center">
                    <Link href="#" data-bs-target="#carossel-servicos" data-bs-slide-to="5" aria-label="Slide 5">
                        <FontAwesomeIcon icon={faScrewdriverWrench} size='5x' />
                        <h5 className="text-center">
                            Manutenção
                        </h5>
                    </Link>
                </div>
            </div>

            <div style={{ display: 'block', padding: 30 }} >
                <div className="carousel slide" id="carossel-servicos" data-bs-ride="carousel" >
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="card mb-3">
                                <Venda />
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="card mb-3">
                                <Servidor />
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="card mb-3">
                                <Rede />
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="card mb-3">
                                <Seguranca />
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="card mb-3">
                                <Energia />
                            </div>
                        </div>

                        <div className="carousel-item">
                            <div className="card mb-3">
                                <Manutencao />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 
import styles from '../styles/CarrosselServicos.module.css'
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image'
import fundoVenda from '../../public/img/fundo_venda.jpg'
import fundoServidor from '../../public/img/fundo_servidor.jpg'
import fundoRede from '../../public/img/fundo_rede.jpg'
import fundoSeguranca from '../../public/img/fundo_seguranca.jpg'
import fundoEnergia from '../../public/img/fundo_energia.jpg'
import { useState } from 'react';

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
            <div id="servicos_icons" className="container mb-3">
                <div className="row justify-content-md-center">
                    <div className="col col-lg-2 align-self-center justify-content-center" alt="Vendas">
                        <i className="fas fa-shopping-cart fa-5x" title="Vendas" onClick={selVendas}></i>
                    </div>
                    <div className="col col-lg-2 align-self-center justify-content-center">
                        <i className="fas fa-server fa-5x" title="Servidores" onClick={selServidores}></i>
                    </div>
                    <div className="col col-lg-2 align-self-center justify-content-center">
                        <i className="fas fa-network-wired fa-5x" title="Rede" onClick={selRedes}></i>
                    </div>
                    <div className="col col-lg-2 align-self-center justify-content-center">
                        <i className="fas fa-shield-alt fa-5x" title="Segurança" onClick={selSeguranca}></i>
                    </div>
                    <div className="col col-lg-2 align-self-center justify-content-center">
                        <i className="fas fa-solar-panel fa-5x" title="Energia Solar" onClick={selSolar}></i>
                    </div>
                </div>
            </div>

            <div style={{ display: 'block', padding: 30 }}>
                <Carousel activeIndex={index}>
                    <Carousel.Item>
                        <div className="card mb-3">
                            <div className="row no-gutters">
                                <div className="col-md-6">
                                    <Image src={fundoVenda} className="card-img" alt="..." />
                                </div>
                                <div className="col-md-6">
                                    <div id="cartao_venda" className="card-body cartao_servico">
                                        <h5 className="card-title">Vendas</h5>
                                        <p className="card-text">Com 20 anos de experiência no mercado de tecnologia
                                            possuímos Know-how para realizar uma análise das necessidades e propormos
                                            soluções que visam melhorar e indicar alternativa para alcançar os objetivos,
                                            indicar o melhor o custo benefício no cenário atual e futuro.</p>
                                        <p className="card-text">Possuímos parceria com os maiores Distribuidores e realizamos
                                            Venda Direta, o pedido sai diretamente do Distribuidor para o Cliente Final,
                                            reduzindo o valor final, contudo ainda acompanhando o Pedido até que seja
                                            completamente entregue.
                                        </p>
                                        <p className="card-text"><small className="text-muted">Leia mais</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="card mb-3">
                            <div className="row no-gutters">
                                <div className="col-md-6">
                                    <div id="cartao_servidor" className="card-body cartao_servico">
                                        <h5 className="card-title">Servidores</h5>
                                        <p className="card-text">Implantação, configuração e instalação em servidores de diverssas áreas
                                            e ambientes, sistemas Windows e Linux.
                                        </p>
                                        <p className="card-text">Windows: Active Directory, File Server, SQL Server, MS Backup,
                                            Hyper-V, Terminal Service e outros.
                                        </p>
                                        <p className="card-text">Linux: Samba DC, BAckup, WEB/PHP, MySQL, Postgres, NVR, VOIP
                                            e outros.
                                        </p>
                                        <p className="card-text"><small className="text-muted">Leia mais</small></p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <Image src={fundoServidor} className="card-img" alt="..." />
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="card mb-3">
                            <div className="row no-gutters">
                                <div className="col-md-6">
                                    <Image src={fundoRede} className="card-img" alt="..." />
                                </div>
                                <div className="col-md-6">
                                    <div id="cartao_rede" className="card-body cartao_servico">
                                        <h5 className="card-title">Rede</h5>
                                        <p className="card-text">Somos especialistas em soluções de rede:
                                            Mikrotik, Rede Wi-Fi Profissional, Firewall Empresarial, Cabeamento
                                            Estruturado, Infraestrutura, Análise de Tráfego e outros.
                                        </p>
                                        <p className="card-text">Realizamos Projeto de Rede, levantamento de
                                            necessidades, indicação das melhores soluções de serviços e equipamentos
                                            com melhor custo benefício.
                                        </p>
                                        <p className="card-text"><small className="text-muted">Leia mais</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="card mb-3">
                            <div className="row no-gutters">
                                <div className="col-md-6">
                                    <div id="cartao_seguranca" className="card-body cartao_servico">
                                        <h5 className="card-title">Segurança</h5>
                                        <p className="card-text">Segurança é essencial, seja qual for o tamanho
                                            do negócio ou residência, fornecemos soluções em CFTV (Vigilância
                                            por Vídeo) de alta qualidade e tecnologia, Controle de Acesso Profissional
                                            e Alarmes. Soluções inteligentes, um único software de gerenciamento
                                            para controlar todos os ativos de segurança, integrando-os.
                                        </p>
                                        <p className="card-text">Realizamos teste de segurança de sistemas e rede,
                                            para identificar possíveis falhas.
                                        </p>
                                        <p className="card-text"><small className="text-muted">Leia mais</small></p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <Image src={fundoSeguranca} className="card-img" alt="..." />
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="card mb-3">
                            <div className="row no-gutters">
                                <div className="col-md-6">
                                    <Image src={fundoEnergia} className="card-img" alt="..." />
                                </div>
                                <div className="col-md-6">
                                    <div id="cartao_energia" className="card-body cartao_servico">
                                        <h5 className="card-title">Energia Solar</h5>
                                        <p className="card-text">A utilização da Energia Solar só trás vantagens, a
                                            ajuda ao Meio Ambiente, reduzindo a criação de novas usinas a base de
                                            combustível fóssil, o lado de economia, onde poderá reduzir em até 95%
                                            a conta de energia, gerando crédito para uso posterior ou compartilhado.
                                            Não importa o atrativo, temos os melhores equipamentos do mundo, com
                                            instalação técnica profissional.
                                        </p>
                                        <p className="card-text"><small className="text-muted">Leia mais</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
} 
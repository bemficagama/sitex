import styles from '../styles/CarrosselServicos.module.css'
import { faCartShopping, faNetworkWired, faScrewdriver, faScrewdriverWrench, faServer, faShieldAlt, faSolarPanel } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import fundoVenda from '../../public/img/fundo_venda.jpg'
import fundoServidor from '../../public/img/fundo_servidor.jpg'
import fundoRede from '../../public/img/fundo_rede.jpg'
import fundoSeguranca from '../../public/img/fundo_seguranca.jpg'
import fundoEnergia from '../../public/img/fundo_energia.jpg'
import fundoManutencao from '../../public/img/fundo_manutencao.jpg'
import { useState } from 'react';


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
            <div id="servicos_icons" className="container mb-3">
                <div className="row justify-content-md-center ">
                    <div className="col col-lg-2 align-self-center justify-content-center text-center">
                        <a data-bs-target="#carossel-servicos" data-bs-slide-to="0" aria-current="true" aria-label="Slide 0" id="btn1" >
                            <FontAwesomeIcon icon={faCartShopping} size='5x' />
                            <h5 className="text-center">
                                Vendas
                            </h5>
                        </a>
                    </div>
                    <div className="col col-lg-2 align-self-center justify-content-center text-center">
                        <a data-bs-target="#carossel-servicos" data-bs-slide-to="1" aria-label="Slide 1">
                            <FontAwesomeIcon icon={faServer} size='5x' />
                            <h5 className="text-center">
                                Servidores
                            </h5>
                        </a>
                    </div>
                    <div className="col col-lg-2 align-self-center justify-content-center text-center">
                        <a data-bs-target="#carossel-servicos" data-bs-slide-to="2" aria-label="Slide 2">
                            <FontAwesomeIcon icon={faNetworkWired} size='5x' />
                            <h5 className="text-center">
                                Rede
                            </h5>
                        </a>
                    </div>
                    <div className="col col-lg-2 align-self-center justify-content-center text-center">
                        <a data-bs-target="#carossel-servicos" data-bs-slide-to="3" aria-label="Slide 3">
                            <FontAwesomeIcon icon={faShieldAlt} size='5x' />
                            <h5 className="text-center">
                                Segurança
                            </h5>
                        </a>
                    </div>
                    <div className="col col-lg-2 align-self-center justify-content-center text-center">
                        <a data-bs-target="#carossel-servicos" data-bs-slide-to="4" aria-label="Slide 4">
                            <FontAwesomeIcon icon={faSolarPanel} size='5x' />
                            <h5 className="text-center">
                                Energia Solar
                            </h5>
                        </a>
                    </div>
                    <div className="col col-lg-2 align-self-center justify-content-center text-center">
                        <a data-bs-target="#carossel-servicos" data-bs-slide-to="5" aria-label="Slide 5">
                            <FontAwesomeIcon icon={faScrewdriverWrench} size='5x' />
                            <h5 className="text-center">
                                Manutenção
                            </h5>
                        </a>
                    </div>
                </div>
            </div>

            <div style={{ display: 'block', padding: 30 }} >
                <div className="carousel slide" id="carossel-servicos" data-bs-ride="carousel" >
                    <div className="carousel-inner">
                        <div className="carousel-item active">
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
                        </div>
                        <div className="carousel-item">
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
                        </div>
                        <div className="carousel-item">
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
                        </div>
                        <div className="carousel-item">
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
                        </div>
                        <div className="carousel-item">
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
                        </div>

                        <div className="carousel-item">
                            <div className="card mb-3">
                                <div className="row no-gutters">
                                    <div className="col-md-6">
                                        <div id="cartao_manutencao" className="card-body cartao_servico">
                                            <h5 className="card-title">Manutenção</h5>
                                            <p className="card-text">Independente da área de atuação e tamanho da empresa 
                                            ou residência, a Manutenção de TI é fundamental. Mesmo com as melhores 
                                            metodologias de gerência sempre deve-se estar atualizado e em perfeito 
                                            funcionamento. 
                                            </p>
                                            <p className="card-text">A Manutenção de TI baseia-se em processos e atividades 
                                            aplicados a sistemas e equipamentos. Tendo como objetivos manter tudo com 
                                            máxima eficácia, disponibilidade e segurança.
                                            </p>
                                            <p className="card-text"><small className="text-muted">Leia mais</small></p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <Image src={fundoManutencao} className="card-img" alt="..." />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
} 
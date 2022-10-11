import styles from '../styles/Solucoes.module.css'

export default function Solucoes() {
    return (
        <div>
            <hr />
            <div className="container mb-3" id='solucoes'>
                <div className="row">
                    <div className="col sm-3" ></div>
                    <div className="col sm-6">
                        <h5 className="text-danger">O QUE FAZEMOS</h5>
                        <h2>Soluções</h2>
                        <p className="card-text">Soluções com garantia e qualidade técnica. Atualização constante
                            de certificações das maiores marcas do mundo.
                            Acompanhamento e Controle através de nossa
                            plataforma de controle de ordens serviços.</p>
                        <p className="card-text"><small className="text-muted">Leia mais</small></p>
                    </div>
                    <div className="col sm-3"></div>
                </div>
            </div>
        </div>
    )
}
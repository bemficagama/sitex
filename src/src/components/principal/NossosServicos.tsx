import styles from '../styles/NossosServicos.module.css'

export default function NossosServicos() {
    return (
        <div>
            <hr />
            <div className="container mb-3" id='servicos'>
                <div className="row">
                    <div className="col sm-3" ></div>
                    <div className="col sm-6">
                        <h5 className="text-danger">O QUE FAZEMOS</h5>
                        <h2>NOSSOS SERVIÇOS</h2>
                        <p className="card-text">Serviços com garantia e qualidade técnica. Atualização constante
                            de certificações das maiores marcas do mundo.
                            Acompanhamento e Controle dos serviços através de nossa
                            plataforma de controle de ordens serviços.</p>
                        <p className="card-text"><small className="text-muted">Leia mais</small></p>
                    </div>
                    <div className="col sm-3"></div>
                </div>
            </div>
        </div>
    )
}
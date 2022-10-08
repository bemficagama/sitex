export default function CarrosselDepoimentos() {
    return (
        <div>
            <div style={{display: 'block', padding: 30}}>
                <div className="carousel slide text-center" data-bs-ride="carousel" indicators="false">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="4000">
                            <h2>&quot;São muito profissionais no que se propõe a fazer.&quot;</h2>
                            <h4>Marcelo, ASM</h4>
                        </div>
                        <div className="carousel-item" data-bs-interval="4000">
                            <h2>&quot;Nos ajudou na hora que mais havíamos necessidade.&quot;</h2>
                            <h4>Plínio, Meister</h4>
                        </div>
                        <div className="carousel-item" data-bs-interval="4000">
                            <h2>&quot;A conduta deles sempre foi muito profissional e ética.&quot;</h2>
                            <h4>Sérgio, Gráfica da Villa</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
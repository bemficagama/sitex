import Carousel from 'react-bootstrap/Carousel'
import Image from 'next/image'

export default function CarrosselDepoimentos() {
    return (
        <div>

            <div style={{ display: 'block', padding: 30 }}>
                <Carousel className="text-center" indicators={false}>
                    <Carousel.Item interval={2000}>
                        <h2>&quot;São muito profissionais no que se propõe a fazer.&quot;</h2>
                        <h4>Marcelo, ASM</h4>
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <h2>&quot;Nos ajudou na hora que mais havíamos necessidade.&quot;</h2>
                        <h4>Plínio, Meister</h4>
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <h2>&quot;A conduta deles sempre foi muito profissional e ética.&quot;</h2>
                        <h4>Sérgio, Gráfica da Villa</h4>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}
import CarrosselPrincipal from "./CarrosselPrincipal"
import QuemSomos from "./QuemSomos"
import Solucoes from "./Solucoes"
import CarrosselServicos from "./CarrosselServicos"
import CarrosselDepoimentos from "./CarrosselDepoimentos"
import Contato from "./Contato"

export default function Principal() {
    return (
        <div> 
            <CarrosselPrincipal />
            <QuemSomos />
            <Solucoes />
            <CarrosselServicos />
            <CarrosselDepoimentos />
            <Contato />
        </div>
    )
}
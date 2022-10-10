import CarrosselPrincipal from "./CarrosselPrincipal"
import QuemSomos from "./QuemSomos"
import NossosServicos from "./NossosServicos"
import CarrosselServicos from "./CarrosselServicos"
import CarrosselDepoimentos from "./CarrosselDepoimentos"
import Contato from "./Contato"

export default function Principal() {
    return (
        <div> 
            <CarrosselPrincipal />
            <QuemSomos />
            <NossosServicos />
            <CarrosselServicos />
            <CarrosselDepoimentos />
            <Contato />
        </div>
    )
}
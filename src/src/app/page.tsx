'use client'

import CarrosselDepoimentos from "./components/principal/CarrosselDepoimentos"
import CarrosselPrincipal from "./components/principal/CarrosselPrincipal"
import CarrosselServicos from "./components/principal/CarrosselServicos"
import Contato from "./components/principal/Contato"
import QuemSomos from "./components/principal/QuemSomos"
import Solucoes from "./components/principal/Solucoes"

export default function Page() {
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
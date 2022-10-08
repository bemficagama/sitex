import Cabecalho from "../components/Cabecalho"
import Rodape from "../components/Rodape"
import Head from 'next/head'
import Image from 'next/image'
import CarrosselPrincipal from "../components/CarrosselPrincipal"
import QuemSomos from "../components/QuemSomos"
import NossosServicos from "../components/NossosServicos"
import CarrosselServicos from "../components/CarrosselServicos"
import CarrosselDepoimentos from "../components/CarrosselDepoimentos"
import Contato from "../components/Contato"

export default function Home() {
  return (
    <div>
      <Cabecalho> </Cabecalho>
      <CarrosselPrincipal />
      <QuemSomos />
      <NossosServicos />
      <CarrosselServicos />
      <CarrosselDepoimentos />
      <Contato />
      <Rodape></Rodape>
    </div>
  )
}

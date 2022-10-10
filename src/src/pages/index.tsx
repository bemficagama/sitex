import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import Cabecalho from "../components/Cabecalho"
import Rodape from "../components/Rodape"
import Principal from '../components/principal'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Microben</title>
        <meta name='description' content='Microben Tecnologia, ALM Comércio, Informática, Rede Lógica e Infraestrutura, Segurança por Vídeo e Controle de Acesso, Energia Solar, Manutenção de TI' />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" sizes="57x57" href="/assets/icon/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/assets/icon/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/assets/icon/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/assets/icon/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/assets/icon/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/assets/icon/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/assets/icon/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/assets/icon/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/icon/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/assets/icon/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/icon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/assets/icon/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/icon/favicon-16x16.png" />
        <link rel="manifest" href="/assets/icon/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/assets/icon/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      <Cabecalho />
      <Principal />
      <Rodape />
    </div>
  )
}

export default Home
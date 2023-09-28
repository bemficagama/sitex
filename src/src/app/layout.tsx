import "bootstrap/dist/css/bootstrap.min.css";
import ImportBsJS from "./components/importBsJS";
import './styles/globals.css'
import type { Metadata } from 'next'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Cabecalho from "./components/Cabecalho"
import Rodape from './components/Rodape';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Microben',
  description: 'Microben Tecnologia, ALM Comércio, Informática, Rede Lógica e Infraestrutura, Segurança por Vídeo e Controle de Acesso, Energia Solar, Manutenção de TI',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        <ImportBsJS />
        <Cabecalho />
        {children}
        <Rodape />
      </body>
    </html>
  )
}
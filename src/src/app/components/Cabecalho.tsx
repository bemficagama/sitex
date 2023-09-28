'use client'
import Image from 'next/image'
import Link from 'next/link'
import logoCabecalho from '../assets/img/logo_cabecalho.png'

const linkAtivoCSS = 'block py-2 pl-3 pr-4 text-white bg-red-700 rounded md:bg-transparent md:text-red-700 md:p-0 dark:text-white md:dark:text-red-500'
const linkNormalCSS = 'block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'



export default function Cabecalho() {

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link href="/" className="navbar-brand">
                        <Image src={logoCabecalho} alt="Microben Tecnologia" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#basic-navbar-nav" aria-controls="basic-navbar-nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="basic-navbar-nav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a href="/#quemsomos" className='nav-link'>
                                    A Microben
                                </a>
                            </li>
                            <li className="nav-item">
                                <Link href="/#solucoes" className="nav-link">
                                    Soluções
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/#contato" className="nav-link">
                                    Contato
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
//import styles from '../styles/QuemSomos.module.css'
import Image from 'next/image'
import Link from 'next/link'
import fundoServidor from '../../../public/img/fundo_servidor.jpg'

export default function Servidor() {
    return (
        <div>
            <div className='row m-3'>
                <div className='col'>
                    <figure className="figure w-50 float-end m-3" >
                        <Image src={fundoServidor} className="figure-img rounded img-thumbnail" alt="..." />
                    </figure>
                    <h2>
                        <Link href="/servidor">
                            <a>
                                Servidores
                            </a>
                        </Link>
                    </h2>
                    <p>
                        Implantação, configuração e instalação em servidores de diverssas áreas
                        e ambientes, sistemas operacionais Windows e Linux.
                    </p>
                    <p>
                        Windows: Active Directory, File Server, SQL Server, MS Backup,
                        Hyper-V, Terminal Service e outros.
                    </p>
                    <p>
                        Linux: Samba DC, BAckup, WEB/PHP, MySQL, Postgres, NVR, VOIP
                        e outros.
                    </p>
                </div>
            </div>
        </div >
    )
}
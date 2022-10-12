import Cabecalho from "../../components/Cabecalho"
import Rodape from "../../components/Rodape"
import Servidor from "../../components/servidor/Servidor"

export default function Index() {
    return (
        <div>
            <Cabecalho />
            <Servidor />
            <Rodape />
        </div>
    )
}
import Cabecalho from "../../components/Cabecalho"
import Rodape from "../../components/Rodape"
import CftvComponent from "../../components/seguranca/Cftv"

export default function Cftv() {
    return (
        <div>
            <Cabecalho />
            <CftvComponent />
            <Rodape />
        </div>
    )
}
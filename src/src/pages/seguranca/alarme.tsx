import Cabecalho from "../../components/Cabecalho"
import Rodape from "../../components/Rodape"
import AlarmeComponent from "../../components/seguranca/Alarme"

export default function Alarme() {
    return (
        <div>
            <Cabecalho />
            <AlarmeComponent />
            <Rodape />
        </div>
    )
}
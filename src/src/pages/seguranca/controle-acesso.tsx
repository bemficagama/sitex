import Cabecalho from "../../components/Cabecalho"
import Rodape from "../../components/Rodape"
import ControleAcessoComponent from "../../components/seguranca/ControleAcesso"

export default function ControleAcesso() {
    return (
        <div>
            <Cabecalho />
            <ControleAcessoComponent />
            <Rodape />
        </div>
    )
}
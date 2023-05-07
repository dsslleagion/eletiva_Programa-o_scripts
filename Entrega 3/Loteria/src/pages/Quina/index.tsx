import { Principal } from "../../components/Principal/principal";
import trevoQuina from "../../assets/trevo-quina.png";
import { useContexto } from "../../hooks";
import { qui } from '../../styles/theme';
import { Carregando } from "../../components/Carregando/carregando";

export function Quina() {

    const { quina } = useContexto()

    return (
        <>
            <Carregando dataApuracao={quina.dataApuracao} />
            <Principal
                trevo={trevoQuina}
                alt="trevo-quina"
                name="QUINA"
                color={qui.loteria}
                colorPremio={qui.estimativa}
                dataProximoConcurso={quina.dataProximoConcurso}
                valorEstimadoProximoConcurso={quina.valorEstimadoProximoConcurso}
                numeroDoConcurso={quina.numeroDoConcurso}
                dataPorExtenso={quina.dataPorExtenso}
                dezenas={quina.dezenas}
                acumulado={quina.acumulado}
            />
        </>
    )
}
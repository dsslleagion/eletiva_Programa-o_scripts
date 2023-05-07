import trevoTime from "../../assets/trevo-timemania.png";
import { Carregando } from "../../components/Carregando/carregando";
import { Principal } from "../../components/Principal/principal";
import { useContexto } from "../../hooks";
import { time } from '../../styles/theme';

export function Timemania() {

    const { timemania } = useContexto()

    return (
        <>
            <Carregando dataApuracao={timemania.dataApuracao} />
            <Principal
                trevo={trevoTime}
                alt="trevo-timemania"
                name="TIMEMANIA"
                color={time.loteria}
                colorPremio={time.estimativa}
                dataProximoConcurso={timemania.dataProximoConcurso}
                valorEstimadoProximoConcurso={timemania.valorEstimadoProximoConcurso}
                numeroDoConcurso={timemania.numeroDoConcurso}
                dataPorExtenso={timemania.dataPorExtenso}
                dezenas={timemania.dezenas}
                acumulado={timemania.acumulado}
            />
        </>
    )
}
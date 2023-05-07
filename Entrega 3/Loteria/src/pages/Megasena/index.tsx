import trevoMega from "../../assets/trevo-megasena.png";
import { Carregando } from "../../components/Carregando/carregando";
import { Principal } from "../../components/Principal/principal";
import { useContexto } from "../../hooks";
import { mega } from '../../styles/theme';

export function Megasena() {

    const { megasena } = useContexto()

    return (
        <>
            <Carregando dataApuracao={megasena.dataApuracao} />
            <Principal
                trevo={trevoMega}
                alt="trevo-megasena"
                name="MEGA-SENA"
                color={mega.loteria}
                colorPremio={mega.estimativa}
                dataProximoConcurso={megasena.dataProximoConcurso}
                valorEstimadoProximoConcurso={megasena.valorEstimadoProximoConcurso}
                numeroDoConcurso={megasena.numeroDoConcurso}
                dataPorExtenso={megasena.dataPorExtenso}
                dezenas={megasena.dezenas}
                acumulado={megasena.acumulado}
            />
        </>
    )
}
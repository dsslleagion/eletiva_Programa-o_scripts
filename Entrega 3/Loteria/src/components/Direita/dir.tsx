import styled from "styled-components";
import { Resultado } from "../Resultado/resultado";
import { Acumulou } from "../Acumulou/acumulou";
import { Data } from "../Data/data";


export function Direita({ dezenas, color, acumulado, numeroDoConcurso, dataPorExtenso }: any) {
    return (
        <Wrapper>
            <Resultado dezenas={dezenas} color={color} />
            <Acumulou acumulado={acumulado} />
            <Data numeroDoConcurso={numeroDoConcurso} dataPorExtenso={dataPorExtenso} />
        </Wrapper>
    );
}

const Wrapper = styled.div`
`;

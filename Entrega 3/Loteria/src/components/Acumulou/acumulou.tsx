import styled from "styled-components";

export function Acumulou({ acumulado }: any) {

    if (acumulado == true) {
        return <Acumulo>ACUMULOU!</Acumulo>
    } else {
        return <Acumulo>NÃO ACUMULOU!</Acumulo>
    }

}

const Acumulo = styled.div`
    color: #0066b3;
    margin-top: 15px;
    font-size: 30px;
    font-weight: bold;
`;

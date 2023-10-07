import React from "react"
import styled from "styled-components"
import FieldText from "../component/FieldText"
import FieldTextarea from "../component/FieldTextarea"
import Boton from "../component/Boton"

const NuevoVideoDiv = styled.div`
    height: 94.125rem;
    background: var(--color-black-dark);
    color: white;
    display: flex;
    flex-direction: column;
`
const Encabezado = styled.h1`
    color: var(--color-gray-light);
    text-align: center;
    font-family: var(--roboto);
    font-size: 3.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding: 3rem 0;
`
const NuevoVideo = () => {
    return <NuevoVideoDiv>
        <Encabezado>Nuevo video</Encabezado>
        <FieldText placeholder="CARLOS" />
        <FieldText />
        <FieldText />
        <FieldText />
        <FieldTextarea />
        <FieldText />
        <Boton />
        <Boton />
        <Boton />
    </NuevoVideoDiv>
}

export default NuevoVideo
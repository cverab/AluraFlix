import React from "react"
import styled from "styled-components"
import FieldText from "../component/FieldText"
import FieldTextarea from "../component/FieldTextarea"
import Boton from "../component/Boton"

const NuevaCategoriaDiv = styled.div`
    height: 106.0625rem;
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
const NuevaCategoria = () => {
    return <NuevaCategoriaDiv>
        <Encabezado>Nueva categoria</Encabezado>
        <FieldText />
        <FieldTextarea />
        <FieldText />
        <FieldText />
        <Boton />
        <Boton />
    </NuevaCategoriaDiv>
}

export default NuevaCategoria
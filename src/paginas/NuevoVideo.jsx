import React from "react"
import styled from "styled-components"
import FieldText from "../component/FieldText"
import FieldTextarea from "../component/FieldTextarea"
import { GuardarVideo, BorrarVideo, NuevaCategoria } from "../component/Boton"
import FieldSelect from "../component/FieldSelect"
import { Link } from "react-router-dom";

const NuevoVideoDiv = styled.div`
    /* height: 94.125rem; */
    background: var(--color-black-dark);
    color: white;
    display: flex;
    flex-direction: column;
    padding: 0 2.5rem;
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
const Menu = styled.div`
    display: flex;
    flex-direction: row;
    padding-bottom: 3rem;
`
const NuevoVideo = () => {
    return <NuevoVideoDiv>
        <Encabezado>Nuevo video</Encabezado>
        <FieldText placeholder="CARLOS" />
        <FieldText />
        <FieldText />
        <FieldSelect />
        <FieldTextarea />
        <FieldText />
        <Menu>
            <GuardarVideo valor="Guardar" />
            <BorrarVideo valor="Limpiar" />
            <Link to="/nuevacategoria"><NuevaCategoria valor="Nueva categoría" /></Link>
        </Menu>
    </NuevoVideoDiv>
}

export default NuevoVideo
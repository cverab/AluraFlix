import React, { useState } from "react"
import styled from "styled-components"
import FieldText from "../component/FieldText"
import FieldTextarea from "../component/FieldTextarea"
import { GuardarVideo, BorrarVideo } from "../component/Boton"
import FieldColor from "../component/FieldColor"
import Table from "../component/Table"

const NuevaCategoriaDiv = styled.div`
    /* height: 106.0625rem; */
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
const NuevaCategoria = () => {
    const cargarInformacion = (e) => {
        setCategoriaData({
            nombre: e.nombre,
            descripcion: e.descripcion,
            color: e.color,
        });
    };

    // Define el estado para almacenar la información de los campos
    const [categoriaData, setCategoriaData] = useState({
        // Inicializa el estado con los valores existentes o valores por defecto
        nombre: "",
        descripcion: "",
        color: "",
        id: "",
    });

    // Función para manejar cambios en el campo de texto
    const handleTextChange = (event) => {
        const { name, value } = event.target;
        // Actualiza el estado solo para el campo que cambió
        setCategoriaData({
            ...categoriaData,
            [name]: value,
        });
    };
    return <NuevaCategoriaDiv>
        <Encabezado>Nueva categoria</Encabezado>
        <FieldText name="nombre" placeholder="Nombre"
            value={categoriaData.nombre}
            onChange={handleTextChange} />
        <FieldTextarea
            name="descripcion" placeholder="Descripción"
            value={categoriaData.descripcion}
            onChange={handleTextChange} />
        <FieldColor name="color" value={categoriaData.color} placeholder="Color" />
        <FieldText placeholder="Código de seguridad" />
        <Menu>
            <GuardarVideo valor="Guardar" />
            <BorrarVideo valor="Limpiar" />
        </Menu>
        <Table cargarInformacion={cargarInformacion} />
    </NuevaCategoriaDiv>
}

export default NuevaCategoria
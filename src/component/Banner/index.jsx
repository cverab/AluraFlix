import React from "react"
import { VideoCardMain } from "../VideoCard"
import Carrusel from "../Carrusel"
import TitleCategory from "../TitleCategory"
import styled from "styled-components"

const BannerDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: auto;
    flex-shrink: 0;
    border: 1px solid #000;
    background: url(1669559000581.png), rgba(0, 18, 51, 0.56);
    background-repeat: no-repeat;
    background-size: 100%;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    padding: 0 2.5rem;
`
const Contenido = styled.div`
    display: flex;
    justify-content: space-between;
    height: 20.84888rem;
    flex-shrink: 0;
    padding-top: 13rem;
    margin-bottom: 2rem;
`
const ContenidoTexto = styled.div`
    width: 50%;
    height: 19.0625rem;
    flex-shrink: 0;
    padding-top: 3rem;
`
const Encabezado = styled.h1`
    font-size: 2.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding-top: 2rem;
    padding-bottom: 0.56rem;
`
const Parrafo = styled.p`
    height: 6.875rem;
    flex-shrink: 0;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
`
const Banner = () => {
    return <BannerDiv>
        <Contenido>
            <ContenidoTexto>
                <TitleCategory categoria="Front End" />
                <Encabezado>Challenge React</Encabezado>
                <Parrafo>Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</Parrafo>
            </ContenidoTexto>
            <VideoCardMain />
        </Contenido>
        <Carrusel />
    </BannerDiv>
}

export default Banner
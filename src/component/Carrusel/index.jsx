import React from "react"
import styled from "styled-components"
import VideoCard from "../VideoCard"

const CarruselDiv = styled.div`
    display: flex;
    flex-wrap: nowrap;
    width: 82.0625rem;
    height: 19.5rem;
    /* justify-content: center; */
    align-items: center;
    flex-shrink: 0;
    background: var(--color-black-dark);
`
const Carrusel = () => {
    return <CarruselDiv>
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
    </CarruselDiv>
}

export default Carrusel
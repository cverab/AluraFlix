import React from "react"
import styled from "styled-components"

const Card = styled.img`
    width: 27rem;
    height: 16.30313rem;
    flex-shrink: 0;
    border-radius: 0.25rem;
    border: 4px solid var(--color-frontend);
    background: url(miniatura.png), lightgray 50%;
    background-position: 50% 50%;
    background-size: cover;
    `
export const VideoCardMain = styled(Card)`
    width: 40.375rem;
    height: 20.84888rem;
    flex-shrink: 0;
    border: 3px solid red;
`
const VideoCard = () => {
    return <Card />
}

export default VideoCard
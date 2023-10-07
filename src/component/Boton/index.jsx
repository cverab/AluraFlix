import React from "react"
import styled from "styled-components"

const BotonDiv = styled.button`
    font-family: var(--roboto);    
    width: 11.25781rem;
    height: 3.375rem;
    flex-shrink: 0;
    border-radius: 0.25rem;
    text-align: center;
    font-size: 1.3125rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.5rem;
    cursor: pointer;
`
const Boton = (props) => {
    return <BotonDiv>{props.valor}</BotonDiv>
}
// export const GuardarVideo = styled(Boton)`
// `
// export const BorrarVideo = styled(Boton)`
// `
export default Boton
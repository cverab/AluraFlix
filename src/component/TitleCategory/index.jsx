import React from "react";
import styled from "styled-components";

const Categoria = styled.div`
display: flex;
width: 18.5rem;
height: 5.75rem;
flex-direction: column;
justify-content: center;
flex-shrink: 0;
border-radius: 0.25rem;
background: var(--color-frontend);
color: var(--color-gray-light);
text-align: center;
font-family: var(--roboto);
font-size: 3.75rem;
font-style: normal;
font-weight: 400;
line-height: normal;
`
const TitleCategory = (props) => {
    return <Categoria>{props.categoria}</Categoria>
}

export default TitleCategory
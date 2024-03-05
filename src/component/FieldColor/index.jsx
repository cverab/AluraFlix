import React from "react"
import styled from "styled-components"

const FieldColorDiv = styled.input`
    height: 2rem;
    margin:2.19rem 0;
    width: 100%;
    align-self: center;
    background: var(--color-gray-medium);
    color: var(----color-gray-dark);
    font-family: var(--roboto);
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    border-radius: 0rem 0rem 0.25rem 0.25rem;
    ::placeholder{
        color: var(--color-gray-ligth);
        font-family: var(--roboto);
        font-size: 0.75rem;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
    }
`
const FieldColor = (props) => {
    return <FieldColorDiv type="color" placeholder={props.placeholder}></FieldColorDiv>
}
export default FieldColor
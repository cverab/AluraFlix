import React from "react"
import styled from "styled-components"

const FieldTextDiv = styled.input`
    height: 2rem;
    margin:2.19rem 0;
    padding: 0 1.5rem;
    width: 90%;
    align-self: center;
    background: var(--color-gray-medium);
    color: var(----color-gray-dark);
    font-family: var(--roboto);
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    border-radius: 0rem 0rem 0.25rem 0.25rem;
`
const FieldText = (props) => {
    return <FieldTextDiv placeholder={props.placehoder}></FieldTextDiv>
}
export default FieldText
import React from "react"
import styled from "styled-components"

const FieldTextareaDiv = styled.textarea`
    width: 90%;
    height: 11.6875rem;
    margin:2.19rem 0;
    padding: 0 1.5rem;
    border-radius: 0.25rem;
    background: var(--color-gray-medium);
    color: var(----color-gray-dark);
    align-self: center;
    font-family: var(--roboto);
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
`
const FieldTextarea = () => {
    return <FieldTextareaDiv></FieldTextareaDiv>
}

export default FieldTextarea
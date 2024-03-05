import React from "react"
import styled from "styled-components"

const FieldSelectDiv = styled.select`
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
`
const FieldSelect = (props) => {
    return <FieldSelectDiv placeholder={props.placeholder}></FieldSelectDiv>
}
export default FieldSelect
import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
    border: 2px solid red;
    height: 100%;

`

export const InfoButton = styled.button`
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    z-index: 10;
`
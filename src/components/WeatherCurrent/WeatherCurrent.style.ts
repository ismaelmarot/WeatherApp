import styled from 'styled-components'
import { flex, size } from '../../mixins'
import { GeneralColors } from '../../constants/GeneralColors'

export const Container = styled.div`
    ${flex('column','center','space-between')}
    ${size('100%','90%')}
    box-sizing: border-box;
    padding: .5rem 1rem;

    background-color: rgba(234, 95, 67, 0.2);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1.1px solid rgba(197, 200, 153, 0.8);
`

export const TempIconContainer = styled.div`
    ${flex('column','flex-start','flex-start')}
    width: 100%;
    margin: 1rem;
`

export const Temp = styled.div`
    font-size: 12rem;
    font-weight: 500;
    line-height: 1;
`

export const Location = styled.div`
    ${flex('column','center','center')}
    font-size: 1.5rem;
    color: ${GeneralColors.white};
`

export const Condition = styled.div`
    font-size: 2rem;
    color: ${GeneralColors.white};
`
import styled from 'styled-components'
import { flex, size } from '../../mixins'
import { GeneralColors } from '../../constants/GeneralColors'

export const Container = styled.div`
    ${flex('column','center','space-between')}
    ${size('100%','95dvh')}
    box-sizing: border-box;
    padding: .5rem 1rem;

    border: 1.1px solid rgba(219, 224, 137, 0.86);
    border-radius: 12px;
    background-color: rgba(83, 179, 190, 0.69);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
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
    color: ${GeneralColors.white}
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
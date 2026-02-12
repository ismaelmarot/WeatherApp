import styled from 'styled-components'
import { GeneralColors } from '../../constants'
import { flex } from '../../mixins'

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 1rem;
    margin-top: 1rem;
`;

export const Item = styled.div`
    ${flex('row','center','space-between')}
    border: 2px solid ${GeneralColors.white};
    border-radius: .5rem;
    padding: .9rem;
    color: ${GeneralColors.white};
`;

export const Label = styled.div`
    font-size: 1rem;
    font-weight: bold;
`;

export const Value = styled.div`
    font-size: 1rem;
    font-weight: 500;
`;

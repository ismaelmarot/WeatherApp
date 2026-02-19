import styled from 'styled-components'
import { GENERAL_COLORS } from '../../constants'
import { flex } from '../../mixins'

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 1rem;
    width: 100%;
`;

export const Item = styled.div`
    ${flex('row','center','space-between')}
    padding: .9rem;
    border-radius: .5rem;
    border: 2px solid ${GENERAL_COLORS.white};
    color: ${GENERAL_COLORS.white};
`;

export const Label = styled.div`
    font-size: 1rem;
    font-weight: bold;
`;

export const Value = styled.div`
    font-size: 1rem;
    font-weight: 500;
`;
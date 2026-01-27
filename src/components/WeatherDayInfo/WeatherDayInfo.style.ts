import styled from 'styled-components';
import { GeneralColors } from '../../constants/GeneralColors';

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1rem;
    margin-top: 2rem;
`;

export const Item = styled.div`
    background-color: ${GeneralColors.grey};
    border-radius: .5rem;
    padding: .9rem;
`;

export const Label = styled.div`
    font-size: 0.75rem;
    color: ${GeneralColors.black};
`;

export const Value = styled.div`
    font-size: 1rem;
    font-weight: 500;
    margin-top: .25rem;
`;

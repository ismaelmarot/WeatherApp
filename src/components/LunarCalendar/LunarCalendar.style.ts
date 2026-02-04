import styled from 'styled-components';
import { flex } from '../../mixins/setFlex';
import { GeneralColors } from '../../constants/GeneralColors';

export const Calendar = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;

    overflow-x: auto;
    padding: 1rem;
    border-radius: .5rem;
    background-color: ${GeneralColors.grey};
`;


export const Item = styled.div`
    ${flex('column','center','center')}
    margin: 1rem;
`;

export const Image = styled.img`
    width: 3rem;
    border-radius: 50%;
`;

export const Day= styled.div`
    font-size: .8rem;
`;

export const Lightning = styled.div`
    font-size: .7rem;
    opacity: 0.8;
`;
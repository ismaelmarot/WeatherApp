import styled from 'styled-components';
import { size } from '../../mixins/setSize';
import { GeneralColors } from '../../constants/GeneralColors';

export const Container = styled.div`
    margin-top: 1.5rem;
`;

export const Temp = styled.div`
    font-size: 4rem;
    font-weight: 600;
    line-height: 1;
`;

export const Condition = styled.div`
    font-size: 1.1rem;
    color: ${GeneralColors.black};
    margin-top: 0.25rem;
`;

export const Location = styled.div`
    margin-top: 0.5rem;
    font-size: 0.9rem;
    color: ${GeneralColors.black};
`;

export const Icon = styled.img`
    ${size('4rem','4rem')}
`;

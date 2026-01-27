import styled from 'styled-components';
import { flex } from '../../mixins/setFlex';

export const Container = styled.div`
    margin-top: 1rem;
`;

export const Item = styled.div`
    ${flex('row','center','space-between')} 
    padding: 8px 0;
    font-size: .8rem;
`;
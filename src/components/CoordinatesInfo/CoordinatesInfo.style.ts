import styled from 'styled-components';
import { flex } from '../../mixins';
import { GeneralColors } from '../../constants/GeneralColors';

export const Container = styled.div`
    ${flex('column','center','center')}
    background-color: ${GeneralColors.blue};
    border-radius: .5rem;
    font-size: 2rem;
`;
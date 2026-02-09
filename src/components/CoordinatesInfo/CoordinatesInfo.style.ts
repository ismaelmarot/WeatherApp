import styled from 'styled-components';
import { flex } from '../../mixins';
import { GeneralColors } from '../../constants/GeneralColors';

export const Container = styled.div`
    ${flex('column','center','center')}
    font-size: 1rem;
    margin-bottom: 2rem;
    color: ${GeneralColors.darkGrey}
`;
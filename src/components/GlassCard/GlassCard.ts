import styled from 'styled-components'
import { flex } from '../../mixins'

export const GlassCard = styled.div`
    ${flex('column', 'center', 'center')}
    box-sizing: border-box;
    width: 90%;
    height: 100%;

    /* padding: 0.75rem 1rem; */

    border-radius: 16px;
    /* border: 1px solid rgba(255, 255, 255, 0.25); */


    border: 5px solid red;

    background: rgba(83, 179, 190, 0.65);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);

    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
`
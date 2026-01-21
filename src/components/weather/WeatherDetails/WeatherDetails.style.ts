import styled from 'styled-components';

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    margin-top: 1.5rem;
`;

export const Item = styled.div`
    background-color: #f5f5f7;
    border-radius: 14px;
    padding: 0.75rem;
`;

export const Label = styled.div`
    font-size: 0.75rem;
    color: #6e6e73;
`;

export const Value = styled.div`
    font-size: 1.05rem;
    font-weight: 500;
`;

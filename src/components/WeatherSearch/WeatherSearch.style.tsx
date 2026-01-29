import styled from 'styled-components';
import { GeneralColors } from '../../constants/GeneralColors';

export const Container = styled.div`
  position: relative;
`;

export const Input = styled.input`
  width: 100%;
  margin-top: 1.5rem;
  padding: 0.75rem 1rem;
  color: red;
  font-size: 1rem;
  
  border-radius: .5rem;
  border: 2px solid ${GeneralColors.grey};
  background-color: ${GeneralColors.white};

  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:focus {
    border-color: ${GeneralColors.blue};
    box-shadow: 0 0 0 3px rgba(0, 113, 227, 0.15);
  }

  &::placeholder {
    color: ${GeneralColors.darkGrey};
  }
`;

export const ListPlacesSearch = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  margin-top: 4px;
  overflow: hidden;
  border: 2px solid ${GeneralColors.black};
  border-radius: 8px;
  z-index: 10;
  background: ${GeneralColors.white};
`;

export const ItemPlace = styled.div`
  padding: .2rem;
  border-bottom: 1px solid ${GeneralColors.black};
  cursor: pointer;
`;

export const LocationPlace = styled.div`
  font-size: .7rem;
  opacity: .7;
`;
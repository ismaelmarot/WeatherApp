import styled from 'styled-components';
import { GeneralColors } from '../../constants/GeneralColors';
import { flex } from '../../mixins/setFlex';
import { size } from '../../mixins/setSize';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin: 1rem 0;
`;

export const Item = styled.div`
  background-color: ${GeneralColors.grey};
  border-radius: .5rem;
  padding: .85rem;
`;

export const Label = styled.div`
  font-size: 0.75rem;
  color: ${GeneralColors.black};
`;

export const Value = styled.div`
  ${flex('column','center','center')}
  gap: .5rem;
  margin-top: .25rem;
  font-size: 1rem;
  font-weight: 500;
`;

export const ArrowContainer = styled.div`
  ${flex('column','center','center')}
  ${size('2rem','2rem')}
  border: 2px solid ${GeneralColors.black};
  border-radius: 50%;
`;

export const WindArrow = styled.span`
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-bottom: 22px solid ${GeneralColors.black};
`;

export const ItemMoon = styled(Item)`
  background-color: ${GeneralColors.black};
`;

export const Image = styled.img`
  width: 8rem;
  margin: 1rem;
  border-radius: 50%;
  opacity: .9;
`;
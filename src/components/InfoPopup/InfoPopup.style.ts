import styled from 'styled-components'
import { GeneralColors } from '../../constants'

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 11;

  /* background: rgb(20, 97, 107); */
  backdrop-filter: blur(8px);

  display: flex;
  justify-content: center;
  align-items: center;
`

export const Popup = styled.div`
  width: 100%;
  height: 100%;
  border-radius: .5rem;

  background: ${GeneralColors.grey};

  display: flex;
  flex-direction: column;
`

/* HEADER NO SCROLLEA */
export const Header = styled.div`
  position: sticky;
  top: 0;
  z-index: 10;

  height: 56px;
  padding: 0 1rem;

  background: ${GeneralColors.grey};
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Title = styled.h3`
  margin: 0;
  font-size: 1.1rem;
  color: ${GeneralColors.black};
`

export const CloseButton = styled.button`
  border: none;
  background: none;

  font-size: 1.4rem;
  font-weight: bold;
  cursor: pointer;

  line-height: 1;
`

/* ESTE ES EL ÚNICO SCROLL */
export const ScrollContent = styled.div`
  flex: 1;
  overflow-y: auto;

  padding: 1rem;
`

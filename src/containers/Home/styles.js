import styled from 'styled-components'

import ImagemMulher from '../../assets/imagemmulher.png'
import { theme } from '../../styles/theme'

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.primary};
  font-weight: 600;
`

export const Img = styled.div`
  width: 100%;
  height:94vh;
  background-image: url(${ImagemMulher});
  background-size: cover;
`

export const SecondContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 9.875rem 8.813rem;
  gap: 27px;

  h4 {
    color: ${theme.colors.light};
    font-weight: 500;
    font-size: 1.3rem;
  }

  h2 {
    font-size: 67px;
    color: ${theme.colors.white};
  }

  span {
    color: ${theme.colors.secondary};
    font-style: italic;
    font-weight: 200;
  }

  p {
    width: 290px;
    line-height: 1.5;
    color: #f9fbfa;
    font-weight: 300;
    font-size: 17px;
  }

  button {
    margin-top: 20px;
    font-size: 17px;
    padding: 11px;
    color: white;
    font-weight: 600;
    border: 1px solid #f9fbfa;
    background: transparent;
    width: 116px;
    cursor: pointer;
    transition: all 200ms;

    &:hover {
      background-color: ${theme.colors.secondary};
      transform: scale(1.1);
      font-weight: 600;
    }
  }
`

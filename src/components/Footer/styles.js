import styled from 'styled-components'

import { theme } from './../../styles/theme'

export const Container = styled.div`
  background-color: #000000;
  min-height: 60vh;
  display: flex;
  gap: 150px;
  padding-top: 100px;
  padding-left: 220px;
  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    height: 1px;
    right: 0;
    left: 0;
    background-color: ${theme.colors.white};
  }

  &::before {
    top: 50px;
  }

  &::after {
    bottom: 50px;
  }
`

export const SecondContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;

  h2 {
    color: ${theme.colors.white};
    font-size: 22px;
    position: relative;
    bottom: 15px;
    cursor: pointer;
  }

  p {
    color: ${theme.colors.white};
    font-weight: 300;
    font-size: 13px;
    cursor: pointer;
  }
`

export const IconContainer = styled.div`
  display: flex;
  gap: 5px;
  margin-top: 5px;
  cursor: pointer;
`

export const FooterText = styled.div`
  position: absolute;
  color: ${theme.colors.white};
  font-size: 14px;
  bottom: 13px;
  right: 500px;
`

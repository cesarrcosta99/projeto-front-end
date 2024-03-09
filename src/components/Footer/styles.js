import styled from 'styled-components'

import { theme } from './../../styles/theme'

export const Content = styled.div`
  background-color: #000000;
`

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
  }

  p {
    color: ${theme.colors.white};
    font-weight: 300;
    font-size: 13px;
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

export const Subscriber = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  height: 50vh;
  justify-content: center;
  align-items: center;

  h2 {
    color: ${theme.colors.white};
    font-size: 44px;
  }

  span {
    font-size: 35px;
    font-style: italic;
    font-weight: 200;
  }

  div {
    display: flex;
  }
`

export const Label = styled.p`
  font-size: 14px;
  color: #f9fbfa;
  font-weight: 300;
  position: relative;
  right: 341px;
`

export const InputLabel = styled.input`
  height: 47px;
  font-size: 13px;
  padding-left: 15px;
  margin-right: 155px;
  color: ${theme.colors.white};
  background-color: ${theme.colors.black};
  border: 1px solid ${theme.colors.white};
  width: 530px;
  transition: all 0.1s ease;

  &::placeholder {
    font-size: 13px;
    color: ${theme.colors.white};
  }

  &.error {
    border: 2px solid ${theme.colors.error};
  }

  &.normal {
    border: 1px solid ${theme.colors.white};
  }

  &:hover {
    border: 2px solid ${theme.colors.white};
  }

  &:focus {
    border: 2px solid ${theme.colors.white};
  }
`

export const Button = styled.button`
  height: 49px;
  color: #000000;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  width: 141px;
  position: relative;
  right: 160px;
  top: -1px;

  &:hover {
    background-color: ${theme.colors.black};
    color: ${theme.colors.white};
    border: 1px solid ${theme.colors.white};
  }
`

export const P = styled.p`
  color: ${theme.colors.white};
  font-size: 17px;
  position: relative;
  left: 14px;
  font-weight: 200;
  margin-bottom: 31px;
`

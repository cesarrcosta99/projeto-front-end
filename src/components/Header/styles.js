import styled from 'styled-components'

import { theme } from '../../styles/theme'

export const Container = styled.div`
  width: 100%;
  height: 12vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.colors.primary};
  font-weight: 600;
  padding: 0 3rem;

  h1 {
    font-size: 2rem;
    color: ${theme.colors.white};
  }
`

export const NaviLink = styled.div`
  display: flex;

  ul {
    list-style: none;
    display: flex;
    gap: 1.25rem;
  }

  li {
    color: ${theme.colors.white};
    cursor: pointer;
    font-size: 0.8rem;
  }
`

export const User = styled.div`
  display: flex;
  gap: 1.5rem;
  font-size: 2.5rem;
  color: ${theme.colors.white};
  align-items: center;
  cursor: pointer;
  div {
    display: flex;
    gap: 0.125rem;
    align-items: center;
  }

  p {
    font-size: 1.2rem;
    font-weight: 400;
  }
`

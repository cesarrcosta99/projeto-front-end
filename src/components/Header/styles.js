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
    font-size: 0.80rem;
  }
`

export const User = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  cursor: pointer;

  p {
    color: ${theme.colors.white};
  }
`

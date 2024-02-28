import styled from 'styled-components'

import { theme } from './../../styles/theme'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  background: ${theme.colors.light};
`

import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import SearchIcon from '@mui/icons-material/Search'

import { theme } from '../../styles/theme'
import { Container, NaviLink, User } from './styles'

function Header() {
  return (
    <Container>
      <h1>Beauty Dev</h1>
      <NaviLink>
        <ul>
          <li>VER TUDO</li>
          <li>NOVIDADES</li>
          <li>MAIS VENDIDOS</li>
          <li>ROSTO</li>
          <li>LÁBIOS</li>
          <li>OLHOS</li>
        </ul>
      </NaviLink>
      <User>
        <AccountCircleIcon
          style={{ fontSize: 35, color: theme.colors.white }}
        />
        <p>Login</p>
        <SearchIcon style={{ cursor: 'pointer', color: theme.colors.white }} />
      </User>
    </Container>
  )
}

export default Header

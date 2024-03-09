import { useState } from 'react'

/* import { theme } from './../../styles/theme' */
import { icons } from './SocialMediaIcons/icons'
import {
  Container,
  SecondContainer,
  IconContainer,
  FooterText,
  Content,
  Subscriber,
  Label,
  InputLabel,
  Button,
  P
} from './styles'

function Footer() {
  const [email, setEmail] = useState('')
  const [isFocus, setIsFocus] = useState(false)

  function validateEmail(event) {
    setEmail(event.target.value)
  }

  const isEmailInvalid =
    email !== '' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  return (
    <Content>
      <Subscriber>
        <h2>
          Você está <span>na lista?</span>
        </h2>
        <P>Receba ofertas e descontos exclusivos</P>

        <Label>Insira seu email aqui*</Label>
        <div>
          <InputLabel
            type="email"
            placeholder="Email"
            onChange={validateEmail}
            onBlur={() => setIsFocus(false)}
            onFocus={() => setIsFocus(true)}
            className={isEmailInvalid && !isFocus ? 'error' : 'normal'}
          />
          <Button type="submit">Enviar</Button>
        </div>
      </Subscriber>

      <Container>
        <SecondContainer>
          <h2>Compre</h2>
          <p style={{ cursor: 'pointer' }}>Todos os produtos</p>
          <p style={{ cursor: 'pointer' }}>Novidades</p>
          <p style={{ cursor: 'pointer' }}>Mais vendidos</p>
          <p style={{ cursor: 'pointer' }}>Lábios</p>
          <p style={{ cursor: 'pointer' }}>Olhos</p>
          <p style={{ cursor: 'pointer' }}>Rosto</p>
        </SecondContainer>

        <SecondContainer>
          <h2>Nossa loja</h2>
          <p style={{ marginBottom: 15 }}>
            Rua Prates, 194 - Bom Retiro <br />
            <p style={{ marginTop: 5 }}>São Paulo - SP, 01121-000</p>
          </p>
          <p style={{ marginBottom: 15 }}>
            Segunda a Sexta : 11:00 às 22:00 <br />
            <p style={{ marginTop: 5 }}>Sábado e Domingo: 11:00 às 24:00</p>
          </p>
          <p>
            Tel: (11) 3456-7890 <br />
            <p style={{ marginTop: 5, cursor: 'pointer' }}>
              Email: info@meusite.com
            </p>
          </p>
        </SecondContainer>

        <SecondContainer>
          <h2>Política</h2>
          <p style={{ cursor: 'pointer' }}>Entregas e devoluções</p>
          <p style={{ cursor: 'pointer' }}>Política da loja</p>
          <p style={{ cursor: 'pointer' }}>Métodos de pagamento</p>
          <p style={{ cursor: 'pointer' }}>Política de Cookies</p>
          <p style={{ cursor: 'pointer' }}>FAQ</p>
        </SecondContainer>

        <SecondContainer>
          <h2>Atendimento</h2>
          <p>Tel: (11) 3456-7890</p>
          <p style={{ cursor: 'pointer' }}>Email: info@meusite.com</p>
          <IconContainer>
            {icons.map(item => (
              <item.img key={item.id} style={{ color: 'white' }} />
            ))}
          </IconContainer>
        </SecondContainer>
        <FooterText>© 2024 Orgulhosamente criado por Dev Partners</FooterText>
      </Container>
    </Content>
  )
}

export default Footer

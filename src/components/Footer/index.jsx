import { icons } from './SocialMediaIcons/icons'
import { Container, SecondContainer, IconContainer, FooterText } from './styles'

function Footer() {
  return (
    <Container>
      <SecondContainer>
        <h2>Compre</h2>
        <p>Todos os produtos</p>
        <p>Novidades</p>
        <p>Mais vendidos</p>
        <p>Lábios</p>
        <p>Olhos</p>
        <p>Rosto</p>
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
          <p style={{ marginTop: 5 }}>Email: info@meusite.com</p>
        </p>
      </SecondContainer>

      <SecondContainer>
        <h2>Política</h2>
        <p>Entregas e devoluções</p>
        <p>Política da loja</p>
        <p>Métodos de pagamento</p>
        <p>Política de Cookies</p>
        <p>FAQ</p>
      </SecondContainer>

      <SecondContainer>
        <h2>Atendimento</h2>
        <p>Tel: (11) 3456-7890</p>
        <p>Email: info@meusite.com</p>
        <IconContainer>
          {icons.map(item => (
            <item.img key={item.id} style={{ color: 'white' }} />
          ))}
        </IconContainer>
      </SecondContainer>
      <FooterText>© 2024 Orgulhosamente criado por Dev Partners</FooterText>
    </Container>
  )
}

export default Footer

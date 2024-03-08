import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { Container, Img, SecondContainer } from './styles'

function Home() {
  return (
    <Container>
      <Header />
      <Img>
        <SecondContainer>
          <h4>LANÇAMENTOS</h4>
          <h2>
            Metálicos <span>Brilhe</span> já
          </h2>
          <p>
            Conheça nossas novas sombras com acabamento brilhante, toque suave e
            leve com 10 horas de durabilidade
          </p>
          <button>Comprar</button>
        </SecondContainer>
      </Img>
      <Footer />
    </Container>
  )
}

export default Home

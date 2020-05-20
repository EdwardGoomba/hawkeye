import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100px 1fr;
`

const Header = styled.div`
  background: pink;
`

const Logo = styled.h2``
const Tagline = styled.h4``

const CameraViewer = styled.div`
  background: yellow;
`

const Home = () => (
  <Container>
    <Header>
      <Logo>HAWKEYE</Logo>
      <Tagline>Connecting Your World</Tagline>
    </Header>
    <CameraViewer>
      <p>Camera goes here</p>
    </CameraViewer>
  </Container>
)

export default Home

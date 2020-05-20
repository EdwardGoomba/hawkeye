import styled from 'styled-components'

const Container = styled.div`
  justify-content: center;
  justify-self: start;
  align-self: center;
  padding: 1rem;
`

const Logo = styled.h2`
  margin: 0;
`
const Tagline = styled.h5`
  margin: 0;
`

const Header = () => (
  <Container>
    <Logo>HAWKEYE</Logo>
    <Tagline>Connecting Your World</Tagline>
  </Container>
)

export default Header

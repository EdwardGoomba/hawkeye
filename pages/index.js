import styled from 'styled-components'

import Header from '../components/Header'

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100px 1fr;
`

const CameraViewer = styled.div`
  background: yellow;
`

const Home = () => (
  <Container>
    <Header />
    <CameraViewer>
      <p>Camera goes here</p>
    </CameraViewer>
  </Container>
)

export default Home

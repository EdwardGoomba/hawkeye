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

const Home = ({ cameraData }) => {
  console.log('Data: ', cameraData)

  return (
    <Container>
      <Header />
      <CameraViewer>
        <p>Camera goes here</p>
      </CameraViewer>
    </Container>
  )
}

export async function getStaticProps() {
  // Call an external API endpoint to get available cameras
  // You can use any data fetching library
  const res = await fetch('http://runningios.com/screamingbox/cameras.json')
  const cameraData = await res.json()


  // By returning { props: cameraData }, the Home component
  // will receive `cameraData` as a prop at build time
  return {
    props: {
      cameraData,
    },
  }
}

export default Home

import { Fragment, useState } from 'react'
import Head from 'next/head'
import styled from 'styled-components'
// components
import Header from '../components/Header'
import { move } from '../server/api'

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100px 1fr;
  margin-bottom: 1rem;
`

const CameraContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-template-rows: 1fr;
  margin-left: 1rem;
  margin-right: 1rem;
  gap: 1rem;
`

const CameraViewer = styled.div`
  /* width: 600px; */
  height: 400px;
  overflow: hidden;
  position: relative;
  border: 2px solid #222831;
`

const CameraImage = styled.img`
  position: absolute;
  left: 0px; top: 0px;
  width: auto;
`

const ControlContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 50px 1fr;
`

const Actions = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
  gap: 1rem 1rem;
`

const ActionButton = styled.button`
  height: 40px;
  border: ${props => props.active ? '1px solid #eeeeee' : '1px solid #222831'};
  border-radius: 4px;
  font-size: 1rem;
  color: ${props => props.active ? '#eeeeee' : '#222831'};
  background: ${props => props.active ? '#00adb5' : 'none'};
  text-transform: uppercase;
`

const Sources = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr;
`

const CameraButton = styled.button`
  display: block;
  height: 40px;
  border: ${props => props.active ? '2px solid #00adb5' : '1px solid #222831'};
  border-radius: 4px;
  font-size: 1rem;
  text-transform: uppercase;
`

const ControlPanel = styled.div`
  display: grid;
  justify-content: center;
`

const ControlCircle = styled.div`
  border: 1px solid #222831;
  height: 250px;
  width: 250px;
  border-radius: 50%;
`

const Home = ({ cameraData }) => {
  const [action, setAction] = useState('cameras')
  const [cameraSource, setCameraSource] = useState(cameraData[0].source)
  const [initCoords, setInitCoords] = useState(null)

  const setCoords = (event) => {
    console.log('Camera Move Started')
    const initX = event.clientX
    const initY = event.clientY

    setInitCoords({ initX, initY })
  }

  const setFinalCoords = () => setInitCoords(null)

  const moveCamera = (event) => {
    const xPos = event.clientX
    const yPos = event.clientY

    if (initCoords) {
      const { initX, initY } = initCoords
      let calcX = -(initX - xPos) / 20
      let calcY = (initY - yPos) / 20
      move(calcX, calcY)
    }
  }

  return (
    <Fragment>
      <Head>
        <title>Hawkeye | Connecting Your World</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Container>
        <Header />
        <CameraContainer>
          <CameraViewer>
            <CameraImage id="cameraView" src={cameraSource} />
          </CameraViewer>
          <ControlContainer>
            <Actions>
              <ActionButton
                active={action === 'cameras'}
                onClick={() => setAction('cameras')}
              >
                Cameras
              </ActionButton>
              <ActionButton
                active={action === 'controls'}
                onClick={() => setAction('controls')}
              >
                Controls
              </ActionButton>
            </Actions>
            <Fragment>
              {action === 'cameras' &&
                <Sources>
                  {cameraData.map(camera => {
                    const { id, name, source } = camera
                    return (
                      <CameraButton
                        active={source === cameraSource}
                        key={`camera-${id}`}
                        onClick={() => setCameraSource(source)}
                      >
                        {name}
                      </CameraButton>
                    )
                  })}

                </Sources>
              }
              {action === 'controls' &&
                <ControlPanel>
                  <p>Click in circle and drag</p>
                  <ControlCircle
                    onMouseDown={(event) => setCoords(event)}
                    onMouseUp={() => setFinalCoords()}
                    onMouseMove={(event) => moveCamera(event)}
                  />
                </ControlPanel>
              }
            </Fragment>
          </ControlContainer>
        </CameraContainer>
      </Container>
    </Fragment>
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

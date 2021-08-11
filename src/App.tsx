import styled, { css } from 'styled-components';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import GlobalStyles from './globalStyles';
import { useEffect, useState } from 'react';
import { ReactComponent as Logo } from './wicrypt.svg';
import deviceIcon from './device-icon';
import wicrypt from './devices.json';

interface ILocations {
  device_name: string
  position: [number, number],
  address: string
  city: string
  country: string
}

function App() {


  const [open, setOpen] = useState(false);
  const [devices, setDevices] = useState<ILocations[]>();

  useEffect(() => {
    const x: any = wicrypt;
    setDevices(x);
  }, [])

  return (
    <>
      <GlobalStyles />
      <AppWrapper>
        <Header>
          <figure>
            <Logo />
          </figure>
          <SearchBar>
            <i className="material-icons">search</i>
            <input type="text" placeholder="Search Device, Locations, City" />
          </SearchBar>
          <div className="actions">
            <button
              onClick={() => setOpen(true)}>Devices</button>
            <button
              onClick={() => setOpen(true)}>Locations</button>
            <button>
              {/* <i className="material-icons">light_mode</i> */}
              <i className="material-icons">mode_night</i>
            </button>
          </div>
        </Header>
        <MapBody>
          <MapContainer
            center={[6.44943, 7.49281]}
            zoom={12.8}
            scrollWheelZoom={true}>
            <TileLayer
              id="mapbox/streets-v11"
              accessToken="pk.eyJ1IjoiY2FsbHlubmFtYW5pIiwiYSI6ImNqcHpqa2VsdjBibXEzeG80bDJvM2ltZXEifQ.xRPReEFt-E83K73BIoJhyw"
              url="https://api.mapbox.com/styles/v1/callynnamani/cks6qgrvv9uah17o5njktvof4/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibmNhbGx5IiwiYSI6ImNrN3Vud3N5bzE1cWwzbXFyc3lpaHlldWoifQ.-HWevPOSU8PIR6HSP4R8Lw"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' />

            {
              devices?.map(wifi => (
                <Marker
                  position={wifi.position}
                  icon={deviceIcon}>
                </Marker>
              ))
            }

          </MapContainer>
        </MapBody>


        <Details open={open}>
          <Title>
            <div>
              <h1>Devices</h1>
            </div>
            <button onClick={() => setOpen(false)}>
              <i className="material-icons">close</i>
            </button>
          </Title>
          <Content></Content>
        </Details>

      </AppWrapper>
    </>
  );
}

export default App;

const AppWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100px 10% 1fr;

  @media (min-width: 900px){
    grid-template-columns: 5% 0.7fr 2fr;
  }


  & .leaflet-container {
    width: 100vw;
    height: 100vh;
  }

`;


const SearchBar = styled.div`
  display: none;
  align-items: center;
    padding: 5px 10px;
    box-sizing: border-box;
    border-radius: 30px;
    flex: 0.5;
    border: 1px solid #9c9c9c;
    & .material-icons {
      color: #9c9c9c;
    }
  & input {
    height: 40px;
    display: block;
    width: 100%;
    font-size: 16px;
    border: none;
    padding-left: 15px;
    outline: none;
    line-height: 1.5;
    &:focus {
      outline: none;
    }
  }

  @media (min-width: 768px){
    display: flex;
  }
`;

const Header = styled.section`
  grid-area: 1 / 1 / span 1 / -1;
  background: rgba(255, 255, 255, 0.5);
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & figure {
    display: none;
  @media (min-width: 768px){
    display: flex;
  }
  }

  & .actions {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    & button {
      border:none;
      background: transparent;
      font-size: 16px;
      cursor: pointer;
    }
  }
`;

const MapBody = styled.section`
  position: relative;
  z-index: 0;
`;

interface IDetails { open: boolean }
const Details = styled.section<IDetails>`
  position: relative;
  z-index: 2;
  bottom: -100vh;
  grid-area: 3 / 1 / -1 / -1;
  background-color: white;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  transition: bottom 400ms ease;

  ${p => p.open && css`
    bottom : 0;
  `}

  @media (min-width: 900px){
    grid-area: 3 / 2 / -1 / span 1;
  }

`;

const Title = styled.section`
  background:#25346A;
  color: white;
  min-height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 20px;
   & button {
     background: transparent;
     border: none;
     cursor: pointer;
     color: white;
   }
`;

const Content = styled.section``;
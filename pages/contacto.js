import styled from "styled-components";
import Head from "next/head";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import GridWrapper from "./../components/GridWrapper";
import { useEffect } from "react";
import HeadSEO from "./../components/HeadSEO";

const MyMapComponent = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={16}
      defaultCenter={{ lat: 19.352037, lng: -99.151034 }}
    >
      <Marker position={{ lat: 19.352037, lng: -99.151034 }} />
    </GoogleMap>
  ))
);

export default function Contacto() {
  useEffect(() => {
    document.getElementById("PageWrapper").scrollTop = 0;
  }, []);
  return (
    <GridWrapper>
      <HeadSEO
        title={"Antítesis Films | Contacto"}
        desc={`En Antítesis nos interesa conocer a más personas con 
        quienes crecer nuestros proyectos. También nos interesa conocer, 
        crear y producir propuestas audiovisuales de corte social.`}
        // canonical={"https://somosantitesis.com/contacto"}
      />
      <Slide bottom cascade>
        <h2>Contacto</h2>
      </Slide>
      <Slide bottom>
        <h3>Trabaja con Antítesis</h3>
        <p>
          En Antítesis nos interesa conocer a más personas con quienes crecer
          nuestros proyectos. También nos interesa conocer, crear y producir
          propuestas audiovisuales de corte social.
        </p>
        <h4>Locación</h4>
      </Slide>
      <MapContainer>
        <MyMapComponent
          isMarkerShown
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyBNMT9E5lly4Y0u-30nbMCsPSPEdLxlsUk&v=3.exp&libraries=geometry,drawing,places`}
          loadingElement={<div style={{ height: `100%`, width: `100%` }} />}
          containerElement={<div style={{ height: `400px`, width: `100%` }} />}
          mapElement={<div style={{ height: `100%`, width: `100%` }} />}
        />
      </MapContainer>
      <Slide bottom>
        <p>
          Si deseas más información de nuestros servicios o te interesa sumarte
          a nuestro equipo.
        </p>
        <h4>
          <a href="mailto:info@somosantitesis.com">Contáctanos</a>
        </h4>
      </Slide>
    </GridWrapper>
  );
}

const MapContainer = styled.div`
  display: flex;
  width: 100%;
  grid-column: 4 / span 6;
  margin-bottom: 5%;
`;

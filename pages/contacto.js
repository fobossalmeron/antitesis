import styled from "styled-components";
import Slide from "react-reveal/Slide";
import GridWrapper from "./../components/GridWrapper";
import { useEffect } from "react";
import HeadSEO from "./../components/HeadSEO";

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
        canonical={"https://somosantitesis.com/contacto"}
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
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1749.4176829720998!2d-99.15144113654632!3d19.35197587113749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ffcdd89a6fab%3A0xe689585110f82cd7!2sEligio%20Villamar%2018%2C%20San%20Diego%20Churubusco%2C%2004120%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX%2C%20Mexico!5e0!3m2!1sen!2ses!4v1569238526835!5m2!1sen!2ses"
          width="600"
          height="450"
          frameBorder="0"
          allowFullScreen=""
        ></iframe>
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
  iframe {
    border: 0;
  }
`;

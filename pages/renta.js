import Slide from "react-reveal/Slide";
import GridWrapper from "components/GridWrapper";
import HeadSEO from "components/HeadSEO";
import { logEvent } from "utils/analytics";
import styled from "styled-components";

export default function Renta() {
  const logDownload = () => {
    logEvent("Downloaded Renta PDF", "User clicked on PDF link on /renta");
  };
  return (
    <GridWrapper>
      <HeadSEO
        title={"Antítesis Films | Renta"}
        desc={
          "Contamos con equipo de cámara y de producción a disposición para tus proyectos."
        }
        canonical={"https://somosantitesis.com/renta"}
      />
      <Slide bottom cascade>
        <h2>Renta</h2>
      </Slide>
      <Slide bottom>
        <h3>Equipo</h3>
        <p>
          Contamos con equipo de cámara y de producción a disposición para tus
          proyectos.
        </p>
        <H4Styled onClick={logDownload}>
          <a target="_blank" href="../static/assets/pdf/Antitesis_renta.pdf">
            Ver PDF
          </a>
        </H4Styled>
      </Slide>
    </GridWrapper>
  );
}

const H4Styled = styled.h4`
  a {
    text-decoration: none;
    color: inherit;
  }
  @media (max-width: 800px) {
    font-size: 1.1rem;
  }
  @media (max-width: 400px) {
    font-size: 0.9rem;
  }
`;

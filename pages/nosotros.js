import styled from "styled-components";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import GridWrapper from "components/GridWrapper";
import HeadSEO from "components/HeadSEO";

export default function Nosotros() {
  return (
    <GridWrapper>
      <HeadSEO
        title={"Antítesis Films | Nosotros"}
        desc={`Somos una casa productora de cine, videoclips y formatos web, que se caracterizan 
        por ser la Antítesis de la agenda global, resultando en ficciones y documentales auténticos 
        desde una perspectiva que cuestiona.`}
        canonical={"https://somosantitesis.com/nosotros"}
      />
      <Hero>
        <Fade>
          <figure
            style={{
              backgroundImage: `url(../static/assets/img/stills/about.jpg)`
            }}
          />
        </Fade>
      </Hero>
      <Slide bottom cascade>
        <h2>Antitesis</h2>
        <h2>Films</h2>
      </Slide>
      <Slide bottom>
        <h3>Nosotros</h3>
      </Slide>

      <Fade>
        <p>
          Antítesis nace en 2015 con el objetivo de crear contenido audiovisual
          de calidad con un objetivo social.
          <br />
          <br />
          Somos una casa productora de cine, videoclips y formatos web, que se
          caracterizan por ser la Antítesis de la agenda global, resultando en
          ficciones y documentales auténticos desde una perspectiva que
          cuestiona.
          <br />
          <br />
          Nuestro equipo creativo está conformado por cineastas, videoastas  y
          productores, con un fuerte interés por encontrar historias y crear
          contenido que cambie realidades. El resultado han sido proyectos
          seleccionados en varios festivales de México, Estados Unidos, Reino
          Unido, Holanda, España, Panamá y Francia; y galardonados en Madrid,
          Houston y Panamá.
          <br />
          <br />
          Hemos creado y difundido historias para organizaciones de la sociedad
          civil, emprendedores sociales, universidades y marcas en búsqueda de
          soluciones audiovisuales significativas.
        </p>
        <h3>Servicios</h3>
      </Fade>
      <UlStyled>
        <Fade>
          <li>Cápsulas</li>
          <li>Entrevistas</li>
          <li>Videoclips</li>
          <li>Publicidad</li>
          <li>Cine de Ficción & Documental</li>
          <li>Edición</li>
          <li>Renta de equipo</li>
          <li>Servicios de Producción</li>
        </Fade>
      </UlStyled>
      <H4Styled>
        <Fade>
          Investigación y creación de contenido de carácter social y con
          consciencia sobre los derechos humanos.
        </Fade>
      </H4Styled>
    </GridWrapper>
  );
}

const UlStyled = styled.ul`
  list-style: none;
  margin: 0;
  font-size: 1.32rem;
  letter-spacing: 1px;
  padding: 0;
  column-count: 2;
  column-gap: 0;
  margin-bottom: 12%;
  line-height: 1.4;
  li {
    margin: 0;
    padding: 0;
  }
  @media (max-width: 800px) {
    font-size: 1.1rem;
  }
  @media (max-width: 700px) {
    column-count: 1;
  }
  @media (max-width: 400px) {
    font-size: 0.9rem;
  }
`;

const H4Styled = styled.span`
  font-size: 1.32rem;
  letter-spacing: 1px;
  @media (max-width: 800px) {
    font-size: 1.1rem;
  }
  @media (max-width: 400px) {
    font-size: 0.9rem;
  }
`;

const Hero = styled.div`
  display: flex;
  height: 0px;
  padding-bottom: 56%;
  width: 100%;
  position: relative;
  figure {
    width: 100%;
    height: 100%;
    position: absolute;
    background-size: cover;
  }
`;

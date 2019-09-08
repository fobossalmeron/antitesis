import styled from "styled-components";
import Slide from "react-reveal/Slide";
import Head from "next/head";
import GridWrapper from "./../components/GridWrapper";

export default function Renta() {
  return (
    <GridWrapper>
          <Head>
        <title>Antítesis Films | Renta</title>
      </Head>
      <Slide bottom cascade>
        <h2>Renta</h2>
      </Slide>
      <Slide bottom>
        <h3>Equipo</h3>
        <p>
          Contamos con equipo de cámara y de producción a disposición para tus
          proyectos.
        </p>
        <h4><a href="../static/assets/pdf/Antitesis_renta.pdf">Ver PDF</a></h4>
      </Slide>
    </GridWrapper>
  );
}
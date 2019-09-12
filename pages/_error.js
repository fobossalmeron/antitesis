import React from "react";
import Head from "next/head";
import Slide from "react-reveal/Slide";
import GridWrapper from "./../components/GridWrapper";
import HeadSEO from "./../components/HeadSEO";

const Error = props => {
  const serverError = code => (
    <GridWrapper>
      <HeadSEO
        title={`Antitesis Films | ${code}`}
        desc={`Somos una casa productora de cine, videoclips y formatos web, que se caracterizan 
        por ser la Antítesis de la agenda global, resultando en ficciones y documentales auténticos 
        desde una perspectiva que cuestiona.`}
      />
      <Head>
        <title>Antítesis Films | {code}</title>
      </Head>
      <Slide bottom cascade>
        <h2>{code}</h2>
      </Slide>
      <Slide bottom>
        <p>La página no fue encontrada</p>
      </Slide>
    </GridWrapper>
  );
  const error = props.statusCode
    ? serverError(props.statusCode)
    : "An error occurred on client";
  return error;
};

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : null;
  return { statusCode };
};

export default Error;

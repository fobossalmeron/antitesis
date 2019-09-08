import React from "react";
import Head from "next/head";
import styled from "styled-components";
import Slide from "react-reveal/Slide";
import GridWrapper from "./../components/GridWrapper";

const Error = props => {
  const serverError = (code) => (
    <GridWrapper>
    <Head>
    <title>
      Antítesis Films | {code}
    </title>
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
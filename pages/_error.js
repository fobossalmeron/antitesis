import React from "react";
import Head from "next/head";
import styled from "styled-components";
import Slide from "react-reveal/Slide";

const Error = props => {
  const serverError = (code) => (
      <>
    <Head>
    <title>
      Antítesis Films | {code}
    </title>
  </Head>
    <ErrorWrapper>
    <Slide bottom cascade>

      <h2>{code}</h2>
      </Slide>
      <Slide bottom>

      <p>La página no fue encontrada</p>
      </Slide>
    </ErrorWrapper>
    </>
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


const ErrorWrapper = styled.div`
  display: grid;
  box-sizing: border-box;
  position: relative;
  grid-template-columns: repeat(12, 1fr);
  align-items: flex-end;
  padding-bottom: 160px;
  h2 {
    grid-column: 4 / span 6;
    text-transform: uppercase;
    font-size: 3.2rem;
  }
  h3,
  h4,
  p {
    grid-column: 4 / span 6;
  }
  h4 {
    overflow: visible;
    a {
      color: inherit;
      text-decoration: none;
      padding-bottom: 4px;
      border-bottom: 2px solid ${props => props.theme.colors.background};
      transition: border-color 0.3s ease;
      &:hover {
        border-color: ${props => props.theme.colors.foreground};
      }
    }
  }
`;

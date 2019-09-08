import styled from "styled-components";

const GridWrapper = ({ children }) => (
  <Wrapper>
    <Aligner>{children}</Aligner>
  </Wrapper>
);

export default GridWrapper;

const Aligner = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 4 / span 6;
  @media (max-width: 1100px) {
    grid-column: 2 / span 8;
  }
  @media (max-width: 850px) {
    grid-column: 2 / span 9;
  }
  @media (max-width: 550px) {
    grid-column: 2 / span 9;
  }
`;

const Wrapper = styled.div`
  display: grid;
  box-sizing: border-box;
  position: relative;
  grid-template-columns: repeat(12, 1fr);
  align-items: flex-end;
  padding-bottom: 160px;
  h2 {
    text-transform: uppercase;
    font-size: 3.2rem;
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
  p {
    b {
      font-family: "DrunkWide", sans-serif;
    }
  }
  @media (max-width: 650px) {
   h2{
     font-size:2.8rem;
     white-space: nowrap;
   }
   h3{
     font-size:2.8rem;
   }
   p{
     font-size: 1rem;
   }
  }
  @media (max-width: 500px) {
   h2{
     font-size:2.2rem;
   }
   h3{
     font-size:2rem;
   }
  }
  @media (max-width: 400px) {
   h2{
     font-size:1.7rem;
   }
   h3{
     font-size:1.8rem;
   }
  }
`;

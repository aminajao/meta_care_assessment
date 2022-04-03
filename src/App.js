import styled from "styled-components";
import "./App.css";
import Page from "./pages/Home";

function App() {
  return (
    <StyledContainer>
      <Page />
    </StyledContainer>
  );
}

export default App;

const StyledContainer = styled.div`
  font-family: "Gelion";
`;

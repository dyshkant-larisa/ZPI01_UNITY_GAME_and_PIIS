import styled from "styled-components";
import Homepage from "./pages/homepage";
import Header from "./components/header";

const Content = styled.div`
  width: 100%;
  height: 100%;
  background-color: #215791;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  background: rgb(255,229,37);
  background: linear-gradient(180deg, rgba(255,229,37,0.8337928921568627) 0%, rgba(33,87,145,1) 100%);
`;

function App() {
  return (
    <>
      <Container>
        <Header />
      </Container>
      <Content>
        <Homepage />
      </Content>
    </>
  );
}

export default App;

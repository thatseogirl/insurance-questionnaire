import { ThemeProvider } from "styled-components";
import Question from "./components/Question";
import SideNavigation from "./components/SideNavigation";
import { Container } from "./components/styles/Container.styled";
import GlobalStyle from "./components/styles/GlobalStyle.styled";

const theme = {
  colors: {
    sideNav: '#2954A9',
    body: '#fff',
    question: '#fff',
    before: '#bec7ef'
  },

  mobile: '768px',
}
function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Container>
          <SideNavigation />
          <Question />
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;

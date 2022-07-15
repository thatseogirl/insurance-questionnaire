import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import Question from "./components/pages/Question";
import SideNavigation from "./components/pages/SideNavigation";
import { Container } from "./components/styles/Container.styled";
import GlobalStyle from "./components/styles/GlobalStyle.styled";

const theme = {
  colors: {
    sideNav: "#2954A9",
    body: "#fff",
    question: "#fff",
    before: "#bec7ef",
  },

  mobile: "990px",
};
function App() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionPosition, setCurrentQuestionPosition] = useState(0);
  const [width, setWidth] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [isChecked, setIsChecked] = useState(false);
  const [shake, setShake] = useState(false);

  //getFetched Data
  useEffect(() => {
    const getQuestion = async () => {
      const questionFromServer = await fetchQuestions();
      const result = questionFromServer[currentQuestionPosition];
      setQuestions(result);
      setTotalQuestions(questionFromServer.length);
    };
    getQuestion();
  }, [currentQuestionPosition]);

  //fetch data
  const fetchQuestions = async () => {
    const respond = await fetch("http://localhost:5000/questionnaire");
    const data = await respond.json();
    return data;
  };

  //go to previous questions
  const prevQuestion = async () => {
    setCurrentQuestionPosition(currentQuestionPosition - 1);
    setWidth((currentQuestionPosition - 1) * 10 + "%");
    animate()
  };

  //go to next question
  const nextQuestion = async () => {
    setCurrentQuestionPosition(currentQuestionPosition + 1);
    setWidth((currentQuestionPosition + 1) * 10 + "%");
    animate()
  };

  //handle radio
  const handleChange = () => {
    setIsChecked(!isChecked);
  };
  const animate = () => {
    setShake(!shake);
    setTimeout(() => setShake(false), 400);
  }

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Container>
          <SideNavigation />
          <Question
            questions={questions}
            nextQuestion={nextQuestion}
            prevQuestion={prevQuestion}
            handleChange={handleChange}
            width={width}
            currentQuestionPosition={currentQuestionPosition}
            totalQuestions={totalQuestions}
            isChecked={isChecked}
            shake={shake}
          />
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;

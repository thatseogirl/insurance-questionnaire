import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    background-color: ${({ theme }) => theme.colors.body};
    width: 100%;
    height: 100vh;
    font-family: "Roboto", Helvetica, Arial, sans-serif;

section.shake {
  animation: shake 1s infinite;
}
@keyframes shake {
  0% {
    transform: translate(2px, 1px) rotate(0deg);
  }
  10% {
    transform: translate(-1px, -2px) rotate(-2deg);
  }
  20% {
    transform: translate(-3px, 0px) rotate(3deg);
  }
  30% {
    transform: translate(0px, 2px) rotate(0deg);
  }
  40% {
    transform: translate(1px, -1px) rotate(1deg);
  }
  50% {
    transform: translate(-1px, 2px) rotate(-1deg);
  }
  60% {
    transform: translate(-3px, 1px) rotate(0deg);
  }
  70% {
    transform: translate(2px, 1px) rotate(-2deg);
  }
  80% {
    transform: translate(-1px, -1px) rotate(4deg);
  }
  90% {
    transform: translate(2px, 2px) rotate(0deg);
  }
  100% {
    transform: translate(1px, -2px) rotate(-1deg);
  }
}
`;

export default GlobalStyle;

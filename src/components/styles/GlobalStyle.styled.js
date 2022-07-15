import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    background-color: ${({ theme }) => theme.colors.body};
    width: 100%;
    height: 100vh;
    font-family: "Roboto", Helvetica, Arial, sans-serif;

section.shake {
  animation: shake 1s ease-in-out infinite;
}
@keyframes shake {
  0% { 
    transform: rotate(30deg);
   }
    50% {
       transform: rotate(-30deg); 
      }
    100% { 
      transform: rotate(30deg); 
    }
}
`;

export default GlobalStyle;

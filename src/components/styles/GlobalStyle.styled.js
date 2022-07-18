import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 body{
    background-color: ${({ theme }) => theme.colors.body};
    width: 100%;
    height: 100vh;
    font-family: "Roboto", Helvetica, Arial, sans-serif;
    font-weight: 400;
    font-size: 1rem;
    margin: 0;
    overflow: hidden;
    color: rgba(0, 0, 0, 0.87);
  
    }
   
  section.shake {
  animation: shake 1s ease-in-out infinite;
}
  @keyframes shake {
    0% { 
    transform: rotate(20deg); 
  }
    50% {
       transform: rotate(-20deg); 
      }
    100% { 
      transform: rotate(20deg); 
    }
}
`;

export default GlobalStyle;

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    background-color: ${({ theme }) => theme.colors.body};
    width: 100%;
    height: 100vh;
    font-family: "Roboto", Helvetica, Arial, sans-serif;
`

export default GlobalStyle
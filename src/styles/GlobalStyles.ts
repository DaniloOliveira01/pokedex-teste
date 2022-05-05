import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
  scroll-behavior: smooth;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: #fff;
  color: #000 ;
  overflow: hidden;

  font-family: 'Roboto', sans-serif;
  margin: 0;
  padding: 0;
}

a {
  color: #f9f9f9;
  text-decoration: none;
}
`;
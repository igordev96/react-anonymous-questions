import { createGlobalStyle } from "styled-components";
import { colors } from "./variables";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: ${colors.darkGrey};
  }

  body {
    background-color: ${colors.reddish};
    padding-bottom: 3rem;
  }

  h1 {
    font-size: ${36 / 16}rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
  }

  h2 {
    font-size: 1.5rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
  }

  p{
    font-size: 1.5rem;
    font-weight: 400;
    font-family: 'Marvel', sans-serif;
  }

  button {
    background-color: ${colors.green};
    color: ${colors.white};
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 1.5rem;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
  }
`;

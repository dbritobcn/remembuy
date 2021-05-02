import { createGlobalStyle } from "styled-components";
import { colors } from "./Variables";

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${colors.grey};
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    margin: 0;
    min-height: 100vh;
    padding: 15px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
  }
  
  h1 {
    color: ${colors.primary};
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
    text-align: center;
  }
  
  loader {
    margin-top: 60px;
  }
`;

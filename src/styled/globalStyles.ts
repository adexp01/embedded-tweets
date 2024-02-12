import { createGlobalStyle } from "styled-components";
import * as R from "./root";

export const GlobalStyle = createGlobalStyle`
    * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html,
body {
  overflow-x: hidden;
  max-width: 100vw;
  font-family: ${R.PrimaryFont};
  font-weight: 400;
  font-size: 20px;
  line-height: 22px;
  color: ${R.Black};
}

li {
  list-style: none;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  display: block;
  width: 100%;
}

button,
input,
textarea {
  font-family: inherit;
}
`;

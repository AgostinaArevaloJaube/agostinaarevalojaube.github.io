import { createGlobalStyle } from "styled-components";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: ${theme.fonts.fontFamily};
	font-weight: 400;
	color: ${theme.fonts.primaryColor}
};
body {
	height: 100vh;
	padding: 0.5rem;
	background-color: #faf8f8;
	scroll-behavior: smooth;
}
`;
export default GlobalStyle;

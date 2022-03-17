import { createGlobalStyle } from "styled-components";
// @ts-ignore
import RobotoWoff from "../assets/fonts/roboto-condensed-v19-latin-regular.woff";
// @ts-ignore
import RobotoWoff2 from "../assets/fonts/roboto-condensed-v19-latin-regular.woff2";

export default createGlobalStyle`
    @font-face {
        font-family: 'Roboto Condensed';
        src: url(${RobotoWoff2}) format('woff2'),
             url(${RobotoWoff}) format('woff');
    }

    body {
        margin: 0;
        font-family: 'Roboto Condensed', sans-serif;
    }
`;

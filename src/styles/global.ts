import {createGlobalStyle} from "styled-components";
import NEXONFootballGothicBold from "../styles/fonts/NEXONFootballGothicBold.woff2";
import NEXONFootBallGothicLight from "../styles/fonts/NEXONFootballGothicLight.woff2";
import NEXONFootBallGothic from "../styles/fonts/NEXONFootballGothic.woff";
import GmarketSans from "../styles/fonts/GmarketSans.woff";

const GlobalStyle = createGlobalStyle`
  @font-face {
      font-family: "NEXONFootballGothicBold";
      src: local("NEXONFootballGothicBold");
      font-style: normal;
      src: url(${NEXONFootballGothicBold}) format("font-woff2");
  }
  @font-face {
      font-family: "NEXONFootballGothicLight";
      src: local("NEXONFootballGothicLight");
      font-style: normal;
      src: url(${NEXONFootBallGothicLight}) format("font-woff2");
  }
  @font-face {
      font-family: 'NEXONFootballGothic';
      font-weight: normal;
      font-style: normal;
      src: url(${NEXONFootBallGothic}) format("woff");
  }
  @font-face {
      font-family: 'GmarketSans';
      src: url(${GmarketSans}) format('woff');
      font-weight: normal;
      font-style: normal;
  }
  
  body {
      margin: 0;
      padding: 0;
  }
`;

export default GlobalStyle;

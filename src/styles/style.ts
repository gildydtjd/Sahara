import { createGlobalStyle, keyframes } from 'styled-components';
import normalize from 'styled-normalize';

export const neon = keyframes`
    0%,50%,100% {
    text-shadow: 
        0 0 4px #fff,
        0 0 40px #0fa,
        0 0 120px #0fa;
    }
`;

const Globalstyle = createGlobalStyle`
    ${normalize}

    html,
    body {
        overflow: hidden;
    }
    * {
    box-sizing: border-box;
  }
`;

export default Globalstyle;

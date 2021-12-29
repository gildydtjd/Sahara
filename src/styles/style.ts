import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';

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

import { createGlobalStyle } from 'styled-components';

const Globalstyle = createGlobalStyle`
    html,
    body {
        -ms-overflow-style: none; /* IE, Edge */
        scrollbar-width: none; /* Firefox */
    }

    body::-webkit-scrollbar {
        display: none;
    }
    
    * {
    box-sizing: border-box;
  }
`;

export default Globalstyle;

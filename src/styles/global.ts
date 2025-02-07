import { createGlobalStyle } from "styled-components";

export const  GlobalStyle = createGlobalStyle`
   * {
      margin: 0;
      padding: 0;

      box-sizing: border-box;
   }

   :focus {
      outline: 0;
      box-shadow: 0 0 0 2px ${props => props.theme["green-500"]};
   }

   body {
      -webkit-font-smoothing: antialiased;
      
      color: ${props => props.theme["gray-100"]};
      background: ${props => props.theme["gray-800"]};
   }

   body, input, text-area, button {
      letter-spacing: 0.5px;
      font: 400 1rem Roboto, sans-serif;
   }

   @media(max-width: 768px) {
      ::-webkit-scrollbar {
         width: 0px;
      }
   }
`
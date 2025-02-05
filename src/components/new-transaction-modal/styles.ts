import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog"

export const Overlay = styled(Dialog.Overlay)`
   position: fixed;

   inset: 0;

   width: 100vw;
   height: 100vh;

   background: rgba(0, 0, 0, 0.75);
`

export const Content = styled(Dialog.Content)`
   min-width: 32rem;

   position: fixed;
   padding: 2.5rem 3rem;

   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);

   border-radius: 6px;
   background: ${props => props.theme["gray-800"]};

   form {
      margin-top: 2rem;

      display: flex;
      flex-direction: column;

      gap: 1rem;

      input {
         border: 0;
         border-radius: 6px;

         padding: 1rem;

         color: ${props => props.theme["gray-300"]};
         background: ${props => props.theme["gray-900"]};

         &::placeholder {
            color: ${props => props.theme["gray-500"]};
         }
      }

      button[type = "submit"] {
         height: 58px;

         border: 0;
         border-radius: 6px;
         
         padding: 0 .125rem;
         margin-top: 1.5rem;

         cursor: pointer;
         font-weight: bold;

         color: ${props => props.theme.white};
         background: ${props => props.theme["green-500"]};

         &:hover {
            transition: background 0.2s;
            background: ${props => props.theme["green-700"]};
         }
      }
   }
`

export const CloseButton = styled(Dialog.Close)`
   position: absolute;

   border: 0;
   line-height: 0;

   top: 1.5rem;
   right: 1.5rem;
   
   cursor: pointer;

   background: transparent;
   color: ${props => props.theme["gray-500"]};
`
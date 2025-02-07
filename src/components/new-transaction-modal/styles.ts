import styled from "styled-components";

import * as Dialog from "@radix-ui/react-dialog"
import * as RadioGroup from "@radix-ui/react-radio-group"

export const Overlay = styled(Dialog.Overlay)`
   position: fixed;

   inset: 0;

   width: 100vw;
   height: 100vh;

   background: rgba(0, 0, 0, 0.75);
`

export const Content = styled(Dialog.Content)`
   width: 32rem;

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

         &:disabled {
            opacity: 0.6;
            cursor: not-allowed;
         }

         &:not(:disabled):hover {
            transition: background 0.2s;
            background: ${props => props.theme["green-700"]};
         }
      }
   }

   @media(max-width: 768px) {
      display: grid;
      position: fixed;

      top: 100%;
      left: 50%;
      transform: translate(-50%, -100%);
      
      width: 100%;
      padding: 2rem 1.5rem;

      border-top-left-radius: 1.25rem;
      border-top-right-radius: 1.25rem;

      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;

      h2 {
         font-weight: 500;
         font-size: 1.25rem;
      }

      form > input {
         height: 3.375rem;
      }

      form > button[type = "submit"] {
         height: 3.125rem;
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

export const TransactionType = styled(RadioGroup.Root)`
   display: grid;
   grid-template-columns: repeat(2, 1fr);

   gap: 1rem;
   margin-top: 0.5rem;

   @media(max-width: 768px) {
      column-gap: 0.5rem;
   }
`

interface TransactionTypeButtonProps {
   variant: "income" | "outcome"
}

export const TransactionTypeButton = styled(RadioGroup.Item)<TransactionTypeButtonProps>`
   display: flex;
   
   align-items: center;
   justify-content: center;
   
   cursor: pointer;
   height: 3.625rem;
   
   gap: 0.5rem;
   padding: 1rem;
   
   border: 0;
   border-radius: 6px;

   color: ${props => props.theme["gray-300"]};
   background: ${props => props.theme["gray-700"]};

   svg {
      color: ${props => props.variant === "income" ? props.theme["green-300"] : props.theme["red-300"]};
   }

   &[data-state = "unchecked"]:hover {
      transition: background 0.1s;
      background: ${props => props.theme["gray-600"]};
   }

   &[data-state = "checked"] {
      color: ${props => props.theme.white};
      background: ${props => props.variant === "income" ? props.theme["green-500"] : props.theme["red-500"]};

      svg {
         color: ${props => props.theme.white};
      }
   }
`
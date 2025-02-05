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

export const TransactionType = styled(RadioGroup.Root)`
   display: grid;
   grid-template-columns: repeat(2, 1fr);

   gap: 1rem;
   margin-top: 0.5rem;
`

interface TransactionTypeButtonProps {
   variant: "income" | "outcome"
}

export const TransactionTypeButton = styled(RadioGroup.Item)<TransactionTypeButtonProps>`
   display: flex;
   
   align-items: center;
   justify-content: center;
   
   cursor: pointer;
   
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
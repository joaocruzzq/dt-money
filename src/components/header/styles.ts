import styled from "styled-components";

export const HeaderContainer = styled.header`
   padding: 2.5rem 0 7.5rem;
   background: ${props => props.theme["gray-900"]};

   @media(max-width: 768px) {
      height: 12.5rem;
      padding: 3.5rem 1.5rem;
   }
`

export const HeaderContent = styled.div`
   width: 100%;
   max-width: 1120px;

   margin: 0 auto;
   padding: 0 1.5rem;

   display: flex;
   align-items: center;
   justify-content: space-between;

   div {
      display: flex;
      column-gap: 1rem;
   }

   @media(max-width: 768px) {
      padding: 0;
      
      div {
         column-gap: 0.5rem;
         align-items: center;
      }

      div > img {
         width: 1.65rem;
         height: 1.65rem;
      }

      div > h1 {
         font-weight: 500;
         font-size: 1.125rem;
      }
   }
`
export const NewTransactionButton = styled.button`
   height: 50px;
   padding: 0 1.25rem;

   border: 0;
   border-radius: 6px;

   cursor: pointer;
   font-weight: bold;

   color: ${props => props.theme.white};
   background: ${props => props.theme["green-500"]};

   &:hover {
      transition: background 0.2s;
      background: ${props => props.theme["green-700"]};
   }
   
   @media(max-width: 768px) {
      height: 2.375rem;
      padding: 0.5rem 1rem;

      font-weight: 400;
      font-size: 0.875rem;
   }
`
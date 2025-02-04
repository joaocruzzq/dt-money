import styled from "styled-components";

export const HeaderContainer = styled.header`
   padding: 2.5rem 0 7.5rem;
   background: ${props => props.theme["gray-900"]};
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
`
export const NewTransactionButton = styled.button`
   height: 50px;
   padding: 0 1.25rem;

   border: 0;
   border-radius: 6px;

   font-weight: bold;
   
   cursor: pointer;
   transition: background 0.2s;

   color: ${props => props.theme.white};
   background: ${props => props.theme["green-500"]};

   &:hover {
      background: ${props => props.theme["green-700"]};
   }
`
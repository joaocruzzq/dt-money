import styled from "styled-components";

export const TransactionsContainer = styled.main`
   width: 100%;
   max-width: 1120px;

   margin: 4rem auto 0;
   padding: 0 1.5rem;

   .mobile-title, .mobile-svg {
      display: none;
   }

   @media(max-width: 768px) {
      display: grid;
      
      gap: 0.75rem;
      margin: 0.125rem 0;

      .mobile-svg {
         display: block;
      }

      .mobile-title {
         display: flex;
         font-weight: 300;

         align-items: center;
         justify-content: space-between;
      }

      .mobile-title span {
         line-height: 160%;
         font-size: 1.125rem;
         color: ${props => props.theme["gray-300"]};
      }

      .mobile-title p {
         color: ${props => props.theme["gray-500"]};
      }
   }
`

export const TransactionsTable = styled.table`
   width: 100%;
   margin: 1.5rem 0 2.5rem;

   border-collapse: separate;
   border-spacing: 0 0.5rem;

   td {
      padding: 1.5rem 2rem;
      background: ${props => props.theme["gray-700"]};

      &:first-child {
         border-top-left-radius: 6px;
         border-bottom-left-radius: 6px;
      }

      &:last-child {
         border-top-right-radius: 6px;
         border-bottom-right-radius: 6px;
      }
   }

   @media(max-width: 768px) {
      margin: 0;
      
      tbody {
         display: grid;
         gap: 0.75rem;
      }

      tr {
         display: grid;

         grid-template-areas:
         'description description'
         'price price' 'category date';

         line-height: 160%;

         grid-template-rows: repeat(4, auto);
      }

      td {
         display: flex;
         align-items: center;

         padding: 0 1.25rem;
         column-gap: 0.5rem;

         border-collapse: collapse;
         border: 1px solid ${props => props.theme["gray-700"]};
      }

      td:first-child {
         width: 100%;
         padding-top: 1.25rem;

         font-weight: 200;
         grid-area: description;

         border-top-right-radius: 6px;
         border-bottom-left-radius: 0;
      }

      td:nth-child(2) {
         width: 100%;
         grid-area: price;

         font-weight: 500;
         line-height: 130%;
         font-size: 1.25rem;

         padding-top: 0.25rem;
      }

      td:nth-child(3) {
         grid-area: category;
         border-bottom-left-radius: 6px;
      }

      td:nth-child(4) {
         display: flex;
         grid-area: date;

         justify-content: end;
         border-top-right-radius: 0;
      }

      td:nth-child(3), td:nth-child(4) {
         font-weight: 300;

         padding-top: 0.75rem;
         padding-bottom: 1.25rem;

         color: ${props => props.theme["gray-500"]};
      }
   }
`

interface PriceHighlightProps {
   variant: 'income' | 'outcome'
}

export const PriceHighlight = styled.span<PriceHighlightProps>`
   color: ${props => props.variant === "income" ? props.theme["green-300"] : props.theme["red-300"]};
`
import styled from "styled-components";

export const TransactionsContainer = styled.main`
   width: 100%;
   max-width: 1120px;

   margin: 4rem auto 0;
   padding: 0 1.5rem;

   @media(max-width: 768px) {
      margin: 0.5rem 0;

      .mobile-title {
         display: flex;

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
`

interface PriceHighlightProps {
   variant: 'income' | 'outcome'
}

export const PriceHighlight = styled.span<PriceHighlightProps>`
   color: ${props => props.variant === "income" ? props.theme["green-300"] : props.theme["red-300"]};
`
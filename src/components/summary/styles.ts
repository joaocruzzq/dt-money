import styled, { css } from "styled-components";

export const SummaryContainer = styled.section`
   width: 100%;
   max-width: 1120px;

   margin: 0 auto;
   padding: 0 1.5rem;

   display: grid;
   grid-template-columns: repeat(3, 1fr);

   gap: 2rem;
   margin-top: -5rem;

   @media(max-width: 768px) {
      width: 100%;
      overflow: scroll;

      gap: 0.875rem;
      padding: 1rem 1.5rem;
   }
`
interface SummaryCardProps {
   variant?: 'green' | 'red'
}

export const SummaryCard = styled.div<SummaryCardProps>`
   padding: 2rem;
   border-radius: 6px;

   background: ${props => props.theme["gray-600"]};

   header {
      display: flex;

      align-items: flex-start;
      justify-content: space-between;
      
      color: ${props => props.theme["gray-300"]};
   }

   strong {
      display: block;
      font-size: 2rem;
      margin-top: 1rem;
   }

   .mobile-span {
      display: none;
   }

   ${props => props.variant === "green" && css`
      background: ${props => props.theme["green-700"]};
   `}

   ${props => props.variant === "red" && css`
      background: ${props => props.theme["red-700"]};
   `}

   @media(max-width: 768px) {
      width: 17.5rem;
      height: 9.375rem;
      padding: 1.5rem 1.5rem 1.5rem 2rem;

      span {
         font-size: 1rem;
         line-height: 160%;
      }

      strong {
         font-weight: 500;
         line-height: 160%;
         font-size: 1.5rem;
         margin-top: 0.75rem;
      }

      .mobile-span {
         display: block;

         line-height: 160%;
         font-size: 0.875rem;

         color: ${props => props.theme["gray-500"]};
         color: ${props => props.theme["gray-500"]};
         
         ${props => props.variant === "green" && css`
            color: ${props => props.theme["gray-300"]};
         `}

         ${props => props.variant === "red" && css`
            color: ${props => props.theme["gray-300"]};
         `}
      }
   }
`
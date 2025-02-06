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

      align-items: center;
      justify-content: space-between;
      
      color: ${props => props.theme["gray-300"]};
   }

   strong {
      display: block;
      font-size: 2rem;
      margin-top: 1rem;
   }

   ${props => props.variant === "green" && css`
      background: ${props => props.theme["green-700"]};
   `}

   ${props => props.variant === "red" && css`
      background: ${props => props.theme["red-700"]};
   `}
`
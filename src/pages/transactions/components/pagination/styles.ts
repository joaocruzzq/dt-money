import styled, { css } from "styled-components";

export const PaginationContainer = styled.div`
   display: flex;
   column-gap: 8px;

   margin-bottom: 2.5rem;
   justify-content: center;

   button {
      font-size: 0;
      cursor: pointer;

      border: 0;
      background: transparent;

      color: ${props => props.theme["green-500"]};

      &:disabled {
         color: ${props => props.theme["gray-600"]};
      }
   }
`

interface PageIndicatorType {
   variant?: "active" | "inactive"
}

export const PaginationIndicator = styled.span<PageIndicatorType>`
   display: flex;
      
   width: 2.5rem;
   height: 2.5rem;
      
   user-select: none;
   border-radius: 6px;

   align-items: center;
   justify-content: center;

   color: ${props => props.theme["gray-100"]};
   
   ${props => props.variant === "active" && css`
      background: ${props => props.theme["green-500"]};
   `} 

   ${props => props.variant === "inactive" && css`
      background: ${props => props.theme["gray-600"]};
   `}
`
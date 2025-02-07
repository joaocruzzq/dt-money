import { PaginationContainer, PaginationIndicator } from "./styles";

import { CaretLeft, CaretRight } from "phosphor-react";

import { useContext } from "react";
import { TransactionsContext } from "../../../../contexts/transactions-context";

export function Pagination() {
   const { currentPage, totalPages, tablePagination } = useContext(TransactionsContext)

   function handleNextPage() {
      if(currentPage < totalPages) {
         tablePagination(currentPage + 1)
      }
   }

   function handlePreviousPage() {
      if(currentPage > 1) {
         tablePagination(currentPage - 1)
      }
   }

   const pages = Array.from({ length: totalPages }, (_, index) => index + 1)

   return (
      <PaginationContainer>
         <button disabled={currentPage === 1} onClick={handlePreviousPage}>
            <CaretLeft size={24} weight="bold" />
         </button>

         {pages.map(page => (
            <PaginationIndicator key={page} variant={page === currentPage ? "active" : "inactive"}>
               {page}
            </PaginationIndicator>
         ))}

         <button disabled={currentPage === totalPages} onClick={handleNextPage}>
            <CaretRight size={24} weight="bold" />
         </button>
      </PaginationContainer>
   )
}
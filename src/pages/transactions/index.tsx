import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";

import { Header } from "../../components/header";
import { Summary } from "../../components/summary";
import { Pagination } from "./components/pagination";
import { SearchForm } from "./components/search-form";

import { CalendarBlank, TagSimple } from "phosphor-react";

import { useContext } from "react";
import { TransactionsContext } from "../../contexts/transactions-context";

import { dateFormatter, priceFormatter } from "../../utils/formatter";

export function Transactions() {
   const { transactions, totalTransactions, query } = useContext(TransactionsContext)

   return (
      <div>
         <Header />
         <Summary />

         <TransactionsContainer>
            <div className="mobile-title">
               <span>Transações</span>
               <p>{query ? transactions.length : totalTransactions.length} itens</p>
            </div>

            <SearchForm />

            <TransactionsTable>
               <tbody>

                  {transactions.map(transaction => {
                     return (
                        <tr key={transaction.id}>
                           <td width="50%">{transaction.description}</td>

                           <td>
                              <PriceHighlight variant={transaction.type}>
                                 {transaction.type === "outcome" && "- "}
                                 {priceFormatter.format(transaction.price)}
                              </PriceHighlight>
                           </td>

                           <td>
                              <TagSimple size={16} className="mobile-svg" />
                              {transaction.category}
                           </td>

                           <td>
                              <CalendarBlank size={16} className="mobile-svg" />
                              {dateFormatter.format(new Date(transaction.createdAt))}
                           </td>
                        </tr>
                     )
                  })}
                  
               </tbody>
            </TransactionsTable>

            <Pagination />
         </TransactionsContainer>
      </div>
   )
}
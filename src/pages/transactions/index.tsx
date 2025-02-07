import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";

import { Header } from "../../components/header";
import { Summary } from "../../components/summary";
import { SearchForm } from "./components/search-form";

import { useContext } from "react";
import { TransactionsContext } from "../../contexts/transactions-context";
import { dateFormatter, priceFormatter } from "../../utils/formatter";
import { Pagination } from "./components/pagination";

export function Transactions() {
   const { transactions } = useContext(TransactionsContext)

   return (
      <div>
         <Header />
         <Summary />

         <TransactionsContainer>
            {/* <div className="mobile-title">
               <span>Transações</span>
               <p>{transactions.length} items</p>
            </div> */}

            {/* <SearchForm /> */}

            {/* <TransactionsTable>
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
                           <td>{transaction.category}</td>
                           <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
                        </tr>
                     )
                  })}
                  
               </tbody>
            </TransactionsTable> */}

            {/* <Pagination /> */}
         </TransactionsContainer>
      </div>
   )
}
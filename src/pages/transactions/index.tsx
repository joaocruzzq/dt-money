import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";

import { Header } from "../../components/header";
import { Summary } from "../../components/summary";
import { SearchForm } from "./components/search-form";

import { useEffect, useState } from "react";

interface Transactions {
   id: number
   description: string
   type: "income" | "outcome"
   price: number
   category: string
   createdAt: string
}

export function Transactions() {
   const [transactions, setTransactions] = useState<Transactions[]>([])

   useEffect(() => {
      async function loadTransactions() {
         const response = await fetch("http://localhost:3000/transactions")
         const data = await response.json()

         setTransactions(data)
      }

      loadTransactions()
   }, [])

   return (
      <div>
         <Header />
         <Summary />

         <TransactionsContainer>
            <SearchForm />

            <TransactionsTable>
               <tbody>

                  {transactions.map(transaction => {
                     return (
                        <tr key={transaction.id}>
                           <td width="50%">{transaction.description}</td>
                           <td>
                              <PriceHighlight variant={transaction.type}>
                                 {transaction.price}
                              </PriceHighlight>
                           </td>
                           <td>{transaction.category}</td>
                           <td>{transaction.createdAt}</td>
                        </tr>
                     )
                  })}
                  
               </tbody>
            </TransactionsTable>
         </TransactionsContainer>
      </div>
   )
}
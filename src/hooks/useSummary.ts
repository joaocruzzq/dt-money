import { useContext } from "react"
import { TransactionsContext } from "../contexts/transactions-context"

export function useSummery() {
   const { totalTransactions } = useContext(TransactionsContext)

   const summary = totalTransactions.reduce(
      (acc, transaction) => {
         if (transaction.type === "income") {
            acc.income += transaction.price
            acc.total += transaction.price
         }

         else {
            acc.outcome += transaction.price
            acc.total -= transaction.price
         }

         return acc
      },
      
      { income: 0, outcome: 0, total: 0 }
   )

   return summary
}
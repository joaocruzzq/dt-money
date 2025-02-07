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

   const filteredTransactions = totalTransactions
   .sort((a, b) => new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime())

   const firstTransactionDate = filteredTransactions[filteredTransactions.length - 1] &&
   new Date(filteredTransactions[filteredTransactions.length - 1].createdAt).toLocaleDateString()

   const lastTransactionDate = filteredTransactions[0] &&
   new Date(filteredTransactions[0].createdAt).toLocaleDateString()

   const lastIncome = filteredTransactions.filter(transaction => transaction.type === "income")[0]
   const lastIncomeFormattedDate = lastIncome && new Date(lastIncome.createdAt).toLocaleDateString()

   const lastOutcome = filteredTransactions.filter(transaction => transaction.type === "outcome")[0]
   const lastOutcomeFormattedDate = lastOutcome && new Date(lastOutcome.createdAt).toLocaleDateString()

   return { 
      summary,
      lastTransactionDate,
      firstTransactionDate,
      lastIncomeFormattedDate,
      lastOutcomeFormattedDate,
   }
}
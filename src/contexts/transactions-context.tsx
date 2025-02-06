import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface Transaction {
   id: number
   description: string
   type: "income" | "outcome"
   price: number
   category: string
   createdAt: string
}

interface CreateTransactionInput {
   description: string
   price: number
   category: string
   type: "income" | "outcome"
}

interface TransactionContextType {
   query: string

   transactions: Transaction[]
   totalTransactions: Transaction[]

   fetchTransactions: (query?: string, page?: number) => Promise<void>
   createTransaction: (data: CreateTransactionInput) => Promise<void>
   
   totalPages: number
   currentPage: number

   tablePagination: (page: number) => void
}

interface TransactionsProviderProps {
   children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionContextType)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
   const [transactions, setTransactions] = useState<Transaction[]>([])
   const [totalTransactions, setTotalTransactions] = useState<Transaction[]>([]);
   
   const [totalPages, setTotalPages] = useState(1)
   const [currentPage, setCurrentPage] = useState(1)
   
   const itemsPerPage = 6

   const [query, setQuery] = useState("")

   async function fetchTransactions(query?: string, page = 1) {
      setQuery(query || "")

      const { data, headers } = await api.get("transactions", {
         params: {
            _sort: "createdAt",
            _order: "desc",
            q: query,

            _limit: itemsPerPage,
            _page: page
         }
      })

      setTransactions(data)
      setTotalPages(Math.ceil(Number(headers["x-total-count"]) / itemsPerPage))

      if (totalTransactions.length === 0) {
         const { data: allData } = await api.get("transactions"); 
         setTotalTransactions(allData);
      }
   }

   async function createTransaction(data: CreateTransactionInput) {
      const response = await api.post("transactions", {
         ...data,
         createdAt: new Date()
      })

      setTransactions(state => [response.data, ...state.slice(0, itemsPerPage -1)])
      setTotalTransactions(state => [response.data, ...state])

      fetchTransactions(query, 1)
   }

   function tablePagination(page: number) {
      setCurrentPage(page)
      fetchTransactions(query, page)
   }

   useEffect(() => {
      fetchTransactions(query, currentPage)
   }, [currentPage, query])

   return (
      <TransactionsContext.Provider
      value={{
         query,
         totalPages,
         currentPage,
         transactions,
         totalTransactions,
         tablePagination,
         fetchTransactions,
         createTransaction,
      }}>
         {children}
      </TransactionsContext.Provider>
   )
}
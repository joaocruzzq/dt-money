import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from "./styles"

import * as Dialog from "@radix-ui/react-dialog"

import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react"

import { Controller, useForm } from "react-hook-form"

import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

import { useContext } from "react"
import { TransactionsContext } from "../../contexts/transactions-context"

const NewTransactionFormSchema = z.object({
   price: z.number(),
   category: z.string(),
   description: z.string(),
   type: z.enum(["income", "outcome"])
})

type NewTransactionFormInputs = z.infer<typeof NewTransactionFormSchema>

export function NewTransactionModal() {
   const { createTransaction } = useContext(TransactionsContext)

   const { control, register, handleSubmit, formState: {isSubmitting}, reset } = useForm<NewTransactionFormInputs>({
      resolver: zodResolver(NewTransactionFormSchema),
      defaultValues: {
         type: "income"
      }
   })

   async function handleCrateNewTransaction(data: NewTransactionFormInputs) {
      const { description, price, category, type } = data

      await createTransaction({
         description,
         category,
         price,
         type,
      })

      reset()
   }

   return (
      <Dialog.Portal>
         <Overlay />

         <Content>
            <Dialog.Title>Nova transação</Dialog.Title>

            <CloseButton>
               <X size={24} />
            </CloseButton>

            <form onSubmit={handleSubmit(handleCrateNewTransaction)}>
               <input
               required
               type="text"
               placeholder="Descrição"
               {...register("description")}
               />

               <input
               required
               type="number"
               placeholder="Preço"
               {...register("price", {valueAsNumber: true})}
               />

               <input
               required
               type="text"
               placeholder="Categoria"
               {...register("category")}
               />

               <Controller 
               control={control}
               name="type"
               render={({ field }) => {
                  return (
                     <TransactionType onValueChange={field.onChange} value={field.value}>
                        <TransactionTypeButton value="income" variant="income">
                           <ArrowCircleUp size={24} />
                           Entrada
                        </TransactionTypeButton>

                        <TransactionTypeButton value="outcome" variant="outcome">
                           <ArrowCircleDown size={24} />
                           Saída
                        </TransactionTypeButton>
                     </TransactionType>
                  )
               }}
               />
               
               <button type="submit" disabled={isSubmitting}>
                  Cadastrar
               </button>
            </form>
         </Content>
      </Dialog.Portal>
   )
}
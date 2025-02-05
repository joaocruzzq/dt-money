import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";

import logoIMG from "../../assets/dt-money-logo.svg"

import * as Dialog from "@radix-ui/react-dialog"

import { NewTransactionModal } from "../new-transaction-modal";

export function Header() {
   return (
      <HeaderContainer>
         <HeaderContent>
            <div>
               <img src={logoIMG} alt="" />
               <h1>DT Money</h1>
            </div>

            <Dialog.Root>
               <Dialog.DialogTrigger asChild>
                  <NewTransactionButton>
                     Nova transação
                  </NewTransactionButton>
               </Dialog.DialogTrigger>

               <NewTransactionModal />
            </Dialog.Root>
         </HeaderContent>
      </HeaderContainer>
   )
}
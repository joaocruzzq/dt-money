import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";

import logoIMG from "../../assets/dt-money-logo.svg"

export function Header() {
   return (
      <HeaderContainer>
         <HeaderContent>
            <div>
               <img src={logoIMG} alt="" />
               <h1>DT Money</h1>
            </div>

            <NewTransactionButton>
               Nova transação
            </NewTransactionButton>
         </HeaderContent>
      </HeaderContainer>
   )
}
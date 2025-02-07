import { SummaryCard, SummaryContainer } from "./styles";

import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";

import { priceFormatter } from "../../utils/formatter";

import { useSummery } from "../../hooks/useSummary";

export function Summary() {
   const { summary, lastIncomeFormattedDate, lastOutcomeFormattedDate, firstTransactionDate, lastTransactionDate } = useSummery()

   return (
      <SummaryContainer>
         <SummaryCard>
            <header>
               <span>Entradas</span>
               <ArrowCircleUp size={32} color="#00b37e" />
            </header>

            <strong>{priceFormatter.format(summary.income)}</strong>

            <span className="mobile-span">
               Última entrada em {lastIncomeFormattedDate ? lastIncomeFormattedDate : "—"}
            </span>
         </SummaryCard>

         <SummaryCard>
            <header>
               <span>Saídas</span>
               <ArrowCircleDown size={32} color="#f75a68" />
            </header>

            <strong>{priceFormatter.format(summary.outcome)}</strong>

            <span className="mobile-span">
               Última saída em {lastOutcomeFormattedDate ? lastOutcomeFormattedDate : "—"}
            </span>
         </SummaryCard>

         <SummaryCard variant={summary.total > 0 ? "green" : "red"}>
            <header>
               <span>Total</span>
               <CurrencyDollar size={32} color="#fff" />
            </header>

            <strong>{priceFormatter.format(summary.total)}</strong>

            <span className="mobile-span">
               De {firstTransactionDate ? firstTransactionDate : "— "}
               até {lastTransactionDate ? lastTransactionDate : "—"}
            </span>
         </SummaryCard>
      </SummaryContainer>
   )
}
<template>
  <main>
    <div class="container">
      <section id="content">
        <div class="pricing-factoring">
          <div class="pricing-factoring-content">
            <div class="pricing-factoring-hero">
              <div class="pricing-factoring-hero-info">
                <h1 class="title">Calcolo pricing factoring</h1>
                <div>
                  <label>ID opportunità</label>
                  <span class="badge-id">{{ data.opportunityId }}</span>
                </div>
              </div>
              <div class="pricing-factoring-hero-info">
                <div>
                  <div class="info-data">
                    <div>
                      <label>Ragione Sociale: </label>
                      <label>{{ data.assignorName }}</label>
                    </div>
                    <div>
                      <label>Codice Fiscale: </label>
                      <label>{{ data.assignorFiscalCode }}</label>
                    </div>
                    <div>
                      <label>Partita Iva: </label>
                      <label>{{ data.assignorVatCode }}</label>
                    </div>
                    <button class="badge-tool">Apri tool di calcolo DSO</button>
                  </div>
                </div>
              </div>
              <div class="pricing-factoring-hero-info-list">
                <div class="credit-line">
                  <div class="title-credit-line"> LINEA DI CREDITO - PRO SOLUTO PARZIALE - PRIVATO</div>
                  <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 -9.53674e-07L8 9L16 -9.53674e-07" fill="#5D768C"/>
                  </svg>
                </div>
                <div class="credit-line">
                  <div class="title-credit-line"> LINEA DI CREDITO - PRO SOLUTO PARZIALE - PUBBLICO</div>
                  <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 -9.53674e-07L8 9L16 -9.53674e-07" fill="#5D768C"/>
                  </svg>
                </div>
                <div class="credit-line">
                  <div class="title-credit-line"> LINEA DI CREDITO - PRO SOLUTO TOTALE - PRIVATO</div>
                  <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 -9.53674e-07L8 9L16 -9.53674e-07" fill="#5D768C"/>
                  </svg>
                </div>
                <div class="credit-line">
                  <div class="title-credit-line"> LINEA DI CREDITO - PRO SOLUTO TOTALE - PRIVATO</div>
                  <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 -9.53674e-07L8 9L16 -9.53674e-07" fill="#5D768C"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
// import axios from "axios";

export default {
  data() {
    return {
      data: {
        id: "fb4d4f91-0248-4bf4-ac22-54af1e08e16a",
        opportunityId: "0061X00000I4PE1QAN",
        ownerName: "Stefano Nolè",
        ownerEMail: "sviluppobp+1@dunegroup.it",
        assignorName: "ACTIVA S.R.L.",
        assignorVatCode: "07477691005",
        assignorFiscalCode: "07477691005",
        assignorMoreScore: "BBB",
        saeCode: "",
        annualRevenueAmount: null,
        employeeCount: null,
        eadTotalAmount: 0,
        factoringTotalAmount: 0,
        rwPercentage: 100,
        creditLines: [
          {
            id: "0Q01X000001e8iHSAQ",
            type: "PartialWithoutRecourse",
            debtorType: "Private",
            agentType: "",
            currencyCode: "EUR",
            partialWithoutRecoursePercentage: 99.0,
            withRecoursePercentage: null,
            amountSum: 331493,
            estimatedDso: 1.0,
            calculatedDso: null,
            gracePeriod: 0,
            debtors: [
              {
                fiscalCode: "03579310545",
                name: "SINERGY STORE S.R.L.",
                countryCode: "IT",
                amount: 1,
                estimatedDso: 1.0,
                calculatedDso: null,
              },
              {
                fiscalCode: "09405810962",
                name: "KROMAFIN S.R.L.",
                countryCode: "IT",
                amount: 1,
                estimatedDso: 1.0,
                calculatedDso: null,
              },
            ],
            foreingDebtorCount: 2,
            notForeingDebtorCount: 0,
            debtorCount: 2,
            commissionPercentage: 1,
            managementFeePercentage: 0.15,
            withdrawAccrualDays: null,
            incomingAccrualDays: null,
            interestPercentage: null,
            euriborPercentage: null,
            incomeInterestAmount: null,
            commissionAmount: null,
            interestAmount: null,
            targetPricePercentage: 99,
            purchaseReceivableAmount: 324896,
            bankFee: 3427,
            grossRevenueAmount: null,
            grossAnnualFinancialReturn: 379.73,
            isGrossAnnualFinancialReturnValid: false,
            debtorRecoverCostUnitPrice: 70,
            debtorRecoverCost: 140,
            debtorAssessmentCostUnitPrice: 50,
            debtorAssessmentCost: 100,
            saleCostWithRecoursePercentage: 30,
            saleCostWithoutRecoursePercentage: 0.2,
            saleCostWithRecourseAmount: 1,
            saleCostWithoutRecourseAmount: 663,
            saleCost: 0,
            hasCofaceBill: true,
            cofaceCostPercentage: 0.1,
            cofaceCost: 331.493,
            totalCost: -431.493,
            finalAmount: 324896,
            cofPercentage: 4.66,
            corPercentage: 0.55,
            industrialCostPercentage: 0.0,
            capitalCostPercentage: 0.01,
            previous: null,
          },
          {
            id: "0Q01X000001e8j5SAA",
            type: "PartialWithoutRecourse",
            debtorType: "Public",
            agentType: "",
            currencyCode: "EUR",
            partialWithoutRecoursePercentage: 99.0,
            withRecoursePercentage: null,
            amountSum: 120000,
            estimatedDso: 10.0,
            calculatedDso: null,
            gracePeriod: 0,
            debtors: [
              {
                fiscalCode: "01057861005",
                name: "COMUNE ROMA",
                countryCode: "IT",
                amount: 120000,
                estimatedDso: 10.0,
                calculatedDso: null,
              },
            ],
            foreingDebtorCount: 1,
            notForeingDebtorCount: 0,
            debtorCount: 1,
            commissionPercentage: 1,
            managementFeePercentage: 0.15,
            withdrawAccrualDays: null,
            incomingAccrualDays: null,
            interestPercentage: null,
            euriborPercentage: null,
            incomeInterestAmount: null,
            commissionAmount: null,
            interestAmount: null,
            targetPricePercentage: 99,
            purchaseReceivableAmount: 117612,
            bankFee: 1260,
            grossRevenueAmount: null,
            grossAnnualFinancialReturn: 38.57,
            isGrossAnnualFinancialReturnValid: false,
            debtorRecoverCostUnitPrice: 70,
            debtorRecoverCost: 70,
            debtorAssessmentCostUnitPrice: 50,
            debtorAssessmentCost: 50,
            saleCostWithRecoursePercentage: 30,
            saleCostWithoutRecoursePercentage: 0.2,
            saleCostWithRecourseAmount: 1,
            saleCostWithoutRecourseAmount: 240,
            saleCost: 0,
            hasCofaceBill: true,
            cofaceCostPercentage: 0.1,
            cofaceCost: 120.0,
            totalCost: -170.0,
            finalAmount: 117612,
            cofPercentage: 4.66,
            corPercentage: 0.55,
            industrialCostPercentage: 0.0,
            capitalCostPercentage: 0.07,
            previous: null,
          },
          {
            id: "0Q01X000001e969SAA",
            type: "TotalWithoutRecourse",
            debtorType: "Private",
            agentType: "",
            currencyCode: "EUR",
            partialWithoutRecoursePercentage: 100.0,
            withRecoursePercentage: null,
            amountSum: 120000,
            estimatedDso: 10.0,
            calculatedDso: null,
            gracePeriod: 0,
            debtors: [
              {
                fiscalCode: "09405810962",
                name: "KROMAFIN S.R.L.",
                countryCode: "IT",
                amount: 120000,
                estimatedDso: 10.0,
                calculatedDso: null,
              },
            ],
            foreingDebtorCount: 1,
            notForeingDebtorCount: 0,
            debtorCount: 1,
            commissionPercentage: 1,
            managementFeePercentage: 0,
            withdrawAccrualDays: null,
            incomingAccrualDays: null,
            interestPercentage: null,
            euriborPercentage: null,
            incomeInterestAmount: null,
            commissionAmount: null,
            interestAmount: null,
            targetPricePercentage: 99,
            purchaseReceivableAmount: 118800,
            bankFee: 1270,
            grossRevenueAmount: null,
            grossAnnualFinancialReturn: 38.48,
            isGrossAnnualFinancialReturnValid: false,
            debtorRecoverCostUnitPrice: 70,
            debtorRecoverCost: 70,
            debtorAssessmentCostUnitPrice: 50,
            debtorAssessmentCost: 50,
            saleCostWithRecoursePercentage: 30,
            saleCostWithoutRecoursePercentage: 0.2,
            saleCostWithRecourseAmount: 0,
            saleCostWithoutRecourseAmount: 240,
            saleCost: 0,
            hasCofaceBill: true,
            cofaceCostPercentage: 0.1,
            cofaceCost: 120.0,
            totalCost: -170.0,
            finalAmount: 118800,
            cofPercentage: 4.66,
            corPercentage: 0.55,
            industrialCostPercentage: 0.0,
            capitalCostPercentage: 0.07,
            previous: null,
          },
          {
            id: "0Q01X000001e9Q9SAI",
            type: "TotalWithoutRecourse",
            debtorType: "Public",
            agentType: "",
            currencyCode: "EUR",
            partialWithoutRecoursePercentage: 100.0,
            withRecoursePercentage: null,
            amountSum: 210000,
            estimatedDso: 10.0,
            calculatedDso: null,
            gracePeriod: 0,
            debtors: [
              {
                fiscalCode: "00229230602",
                name: "Comune di Pavia",
                countryCode: "IT",
                amount: 10000,
                estimatedDso: 10.0,
                calculatedDso: null,
              },
            ],
            foreingDebtorCount: 1,
            notForeingDebtorCount: 0,
            debtorCount: 1,
            commissionPercentage: 1,
            managementFeePercentage: 0,
            withdrawAccrualDays: null,
            incomingAccrualDays: null,
            interestPercentage: null,
            euriborPercentage: null,
            incomeInterestAmount: null,
            commissionAmount: null,
            interestAmount: null,
            targetPricePercentage: 99,
            purchaseReceivableAmount: 207900,
            bankFee: 2170,
            grossRevenueAmount: null,
            grossAnnualFinancialReturn: 37.58,
            isGrossAnnualFinancialReturnValid: false,
            debtorRecoverCostUnitPrice: 70,
            debtorRecoverCost: 70,
            debtorAssessmentCostUnitPrice: 50,
            debtorAssessmentCost: 50,
            saleCostWithRecoursePercentage: 30,
            saleCostWithoutRecoursePercentage: 0.2,
            saleCostWithRecourseAmount: 0,
            saleCostWithoutRecourseAmount: 420,
            saleCost: 0,
            hasCofaceBill: true,
            cofaceCostPercentage: 0.1,
            cofaceCost: 210.0,
            totalCost: -260.0,
            finalAmount: 207900,
            cofPercentage: 4.66,
            corPercentage: 0.55,
            industrialCostPercentage: 0.0,
            capitalCostPercentage: 0.07,
            previous: null,
          },
        ],
        dsoSkipReason: "bbbbbbbbb",
      },
    };
  } /*
  methods: {
    fetchData() {
      const apiUrl =
        "https://dev-api-pricing.bancaprogetto.it/sessions/fb4d4f91-0248-4bf4-ac22-54af1e08e16a";

      axios
        .get(apiUrl)
        .then((response) => {
          this.data = response.data;
        })
        .catch((error) => {
          console.error("Error", error);
        });
    },
  },
  mounted() {
    this.fetchData();
  },*/,
};
</script>

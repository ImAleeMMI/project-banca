<template>
  <div class="container-table-calc">
    <q-card-section class="credit-line">
      <div>
        <h1 class="title">Commissione</h1>
        <q-input rounded outlined v-model="gracePeriod" type="number" />
      </div>
      <div>
        <h1 class="title">Commissione di gestione</h1>
        <q-input rounded outlined v-model="gracePeriod" type="number" />
      </div>
    </q-card-section>
    <ul >
      <li class="values values-list">
        <label>Percentuale prezzo target</label>
        <span>{{ creditLine.targetPricePercentage }}%</span>
      
      </li>
      <li class="values values-list">
        <label>Valore di acquisto</label>
        <span>{{ creditLine.purchaseReceivableAmount }}€</span>
      </li>
      <li class="values values-list">
        <label>Recupero spese valutazione debitore</label>
        <q-input rounded outlined v-model="gracePeriod" type="number" />
        <span>€</span>
      </li>
      <li class="values values-list">
        <label><strong>Totale competenze</strong></label>
        <span>{{ creditLine.bankFee }}€</span>
      </li>
      <li class="values values-list">
        <label><strong>Rendimento finanziario annuo lordo</strong></label>
        <span>{{ creditLine.grossAnnualFinancialReturn }}%</span>
      </li>
    </ul>
    <div class="q-pa-md">
      <div>
        <label>Pratica diretta</label>
        <q-toggle v-model="valueDisabled" color="green" disable size="xl" />
      </div>
      <div>
        <label>Polizza coface</label>
        <q-toggle v-model="value" color="green" size="xl" />
      </div>
    </div>

    <ul>
      <li class="values values-list">
        <label>Numero debitori</label>
        <span>{{ creditLine.debtorCount }}</span>
      </li>
      <li class="values values-list">
        <label>Costo valutazione debitore</label>
        <q-input rounded outlined v-model="gracePeriod" type="number" />
        <span>{{ creditLine.debtorAssessmentCost }}</span>
      </li>

      <li class="values values-list">
        <label>Costo rete commerciale</label>
        <span>{{ creditLine.saleCost }}€</span>
      </li>
      <li class="values values-list">
        <label>Costo assicurazione coface</label>
        <q-input rounded outlined v-model="gracePeriod" type="number" />
        <span>{{ creditLine.cofaceCost }}€</span>
      </li>
      <li class="values values-list">
        <label>Totale costi acquisition e incasso</label>
        <span>{{ creditLine.finalAmount }}€</span>
      </li>
    </ul>
    <div class="footer-table-calc">
      <div class="q-pa-md q-gutter-sm">
        <q-btn class="btn-restore" icon="fa-solid fa-rotate-left" label="Ripristina" />
        <q-btn class="btn-disable" disable label="Calcola" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      value: ref(true),
      valueDisabled: true,
    };
  },
  computed: {
    user_old() {
      return this.$store.state.user;
    },
    creditLines() {
      return this.$store.getters.getCreditLines;
    },
    creditLine() {
      return this.creditLines[0];
    },
  },
};
</script>

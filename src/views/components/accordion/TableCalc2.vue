<template>
  <div class="container-table-calc">
    <q-card-section class="input-commission-table">
      <div class="title-commission">
        <h1 class="title">Commissione</h1>
        <q-input
          class="my-input"
          rounded
          outlined
          v-model="creditLine.commissionPercentage"
          type="number"
          suffix="%"
        />
      </div>
      <div>
        <h1 class="title">Commissione di gestione</h1>
        <q-input
          class="my-input"
          rounded
          outlined
          v-model="creditLine.managementFeePercentage"
          type="number"
          suffix="%"
        />
      </div>
    </q-card-section>
    <ul>
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
        <q-input
          class="my-input-small"
          rounded
          outlined
          v-model="creditLine.debtorAssessmentCost"
          type="number"
          suffix="€"
        />
        <span>€</span>
      </li>
      <li class="values values-list">
        <label><strong>Totale competenze</strong></label>
        <span class="title-black">{{ creditLine.bankFee }}€</span>
      </li>
      <li class="values values-list">
        <label><strong>Rendimento finanziario annuo lordo</strong></label>
        <span class="title-red"
          >{{ creditLine.grossAnnualFinancialReturn }}%</span
        >
      </li>
    </ul>

    <div class="my-toggle">
      <div class="toggle">
        <h1 class="title">Pratica diretta</h1>
        <span>No</span>
        <q-toggle v-model="valueDisabled" disable color="green" />
        <span>Si</span>
      </div>

      <div class="toggle">
        <h1 class="title">Polizza coface</h1>
        <span>No</span>
        <q-toggle v-model="value" color="green" />
        <span>Si</span>
      </div>
    </div>

    <ul>
      <li class="values values-list">
        <label>Numero debitori</label>
        <span>{{ creditLine.debtorCount }}</span>
      </li>
      <li class="values values-list">
        <label>Costo valutazione debitore</label>
        <q-input class="my-input-small" rounded outlined type="number" suffix="€" />
        <span>{{ creditLine.debtorAssessmentCost }} €</span>
      </li>

      <li class="values values-list">
        <label>Costo rete commerciale</label>
        <span>{{ creditLine.saleCost }}€</span>
      </li>
      <li class="values values-list">
        <label>Costo assicurazione coface</label>
        <q-input class="my-input-small" rounded outlined type="number" suffix="%" />
        <span>{{ creditLine.cofaceCost }}€</span>
      </li>
      <li class="values values-list">
        <label>Totale costi acquisition e incasso</label>
        <span>{{ creditLine.finalAmount }}€</span>
      </li>
    </ul>
    <div class="footer-table-calc">
      <div class="q-pa-md q-gutter-sm">
        <q-btn
          class="btn-restore"
          icon="fa-solid fa-rotate-left"
          label="Ripristina"
        />
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
      commissionPercentage: Number,
      managementFeePercentage: Number,
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

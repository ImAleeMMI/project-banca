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
    <ul class="values-list">
      <li class="values">
        <label>Percentuale prezzo target</label>
        <span>{{ creditLine.targetPricePercentage }}%</span>
        <div class="line-bar"></div>
      </li>
      <li class="values">
        <label>Valore di acquisto</label>
        <span>{{ creditLine.purchaseReceivableAmount }}€</span>
        <div class="line-bar"></div>
      </li>
      <li class="values">
        <label>Recupero spese valutazione debitore</label>
        <q-input rounded outlined v-model="gracePeriod" type="number" />
        <span>€</span>
        <div class="line-bar"></div>
      </li>
      <li class="values">
        <label><strong>Totale competenze</strong></label>
        <span>{{creditLine.bankFee}}€</span>
        <div class="line-bar"></div>
      </li>
      <li class="values">
        <label><strong>Rendimento finanziario annuo lordo</strong></label>
        <span>{{ creditLine.grossAnnualFinancialReturn }}%</span>
        <div class="line-bar"></div>
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

    <ul class="values-list">
      <li>
        <span>Numero debitori</span>
        <span>{{ creditLine.debtorCount }}</span>
        <div class="line-bar"></div>
      </li>
      <li>
        <span>Costo valutazione debitore</span>
        <q-input rounded outlined v-model="gracePeriod" type="number" />
        <span>{{ creditLine.debtorAssessmentCost }}</span>
        <div class="line-bar"></div>
      </li>

      <li>
        <span>Costo rete commerciale</span>
        <span>{{ creditLine.saleCost }}€</span>
        <div class="line-bar"></div>
      </li>
      <li>
        <span>Costo assicurazione coface</span>
        <q-input rounded outlined v-model="gracePeriod" type="number" />
        <span>{{ creditLine.cofaceCost }}€</span>
        <div class="line-bar"></div>
      </li>
      <li>
        <span>Totale costi acquisition e incasso</span>
        <span>{{ creditLine.finalAmount }}€</span>
        <div class="line-bar"></div>
      </li>
    </ul>
    <div>
      <q-btn-group>
        <q-btn color="secondary" glossy label="Ripristina" />
        <q-btn color="secondary" disable glossy label="Calcola" />
      </q-btn-group>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {

  setup() {
    return {
      value: ref(true),
      valueDisabled: true
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

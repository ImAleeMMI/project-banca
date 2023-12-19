<template>
  <div class="q-pa-md" style="max-width: 1200px">
    <q-list bordered class="rounded-borders">
      <q-expansion-item
        expand-separator
        label="LINEA DI CREDITO - PRO SOLUTO PARZIALE - PRIVATO"
        class="title-credit"
      >
        <q-card>
          <q-card-section
            class="credit-line"
            v-if="creditLines && creditLines.length"
          >
            <div>
              <h1 class="title">ID linea di credito</h1>
              {{ creditLines[0].id }}
            </div>
            <div>
              <h1 class="title">Forma tecnica</h1>
              {{ creditLines[0].type }}
            </div>
            <div>
              <h1 class="title">Tipo debitore</h1>
              {{ creditLines[0].debtorType }}
            </div>
            <div>
              <h1 class="title">Importo</h1>
              {{ creditLines[0].amountSum }}
            </div>
            <div>
              <h1 class="title">Crediti acquistabili</h1>
              {{ creditLines[0].partialWithoutRecoursePercentage }}
            </div>
          </q-card-section>
          <accordion-list :debtors="creditLines[0].debtors"> </accordion-list>
          <table-calc></table-calc>
          <table-calc-2></table-calc-2>
        </q-card>
      </q-expansion-item>
    </q-list>
  </div>
</template>

<script>
import AccordionList from "./AccordionList.vue";
import TableCalc from "./TableCalc.vue";
import TableCalc2 from './TableCalc2.vue';


export default {
  components: {
    AccordionList,
    TableCalc,
    TableCalc2

  },
  computed: {
    creditLines() {
      return this.$store.getters.getCreditLines;
    },
  },
};
</script>

<style lang="scss">
@import "../../../styles/accordion.scss";
</style>



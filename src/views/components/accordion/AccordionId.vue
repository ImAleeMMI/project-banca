<template>
  <div class="q-pa-md" style="max-width: 1200px">
    
      <q-expansion-item
        group="somegroup"
        label="LINEA DI CREDITO - PRO SOLUTO PARZIALE - PRIVATO"
        class="shadow-1 overflow-hidden"
        style="border-radius: 30px; margin:auto"
        dense-toggle
        :header-style="{ backgroundColor: '#fff' }"
      >
        <q-card class="credit-line">
          <q-card-section v-if="creditLines && creditLines.length">
            <div class="flex">
              <div>
                <h1 class="title">ID linea di credito</h1>
                <h1 class="sub-title">{{ creditLine.id }}</h1>
              </div>
              <div>
                <h1 class="title">Forma tecnica</h1>
                <h1 class="sub-title">{{ creditLine.type }}</h1>
              </div>
              <div>
                <h1 class="title">Tipo debitore</h1>
                <h1 class="sub-title">{{ creditLine.debtorType }}</h1>
              </div>
              <div>
                <h1 class="title">Importo</h1>
                <h1 class="sub-title">{{ creditLine.amountSum }}€</h1>
              </div>
              <div>
                <h1 class="title">Crediti acquistabili</h1>
                <h1 class="sub-title">
                  {{ creditLine.partialWithoutRecoursePercentage }}%
                </h1>
              </div>
            </div>

            <accordion-list :debtors="creditLine.debtors"> </accordion-list>
            <table-calc></table-calc>
            <table-calc-2></table-calc-2>
          </q-card-section>
        </q-card>
      </q-expansion-item>
  </div>
</template>

<script>
import AccordionList from "./AccordionList.vue";
import TableCalc from "./TableCalc.vue";
import TableCalc2 from "./TableCalc2.vue";

export default {
  props: ["creditLine"],

  components: {
    AccordionList,
    TableCalc,
    TableCalc2,
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

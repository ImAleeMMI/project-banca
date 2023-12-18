<template>
  <div class="q-pa-md" style="max-width: 1200px">
    <q-list bordered class="rounded-borders">
      <q-expansion-item
        expand-separator
        label="LINEA DI CREDITO - PRO SOLUTO PARZIALE - PRIVATO"
      >
        <q-card>
          <q-card-section class="credit-line">
            <div class="line-bar"></div>
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
        </q-card>
      </q-expansion-item>
    </q-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      creditLines: null,
    };
  },
  created() {
    this.creditLines = this.$store.getters.userData;
  },
};
</script>

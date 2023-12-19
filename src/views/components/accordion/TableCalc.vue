<template>
  <div class="title-table">TABELLA CALCOLO</div>
  <div>
    <q-card-section class="credit-line">
      <div>
        <h1 class="title">Importo</h1>
        <p>{{ this.user_old.creditLines[0].amountSum }}€</p>
      </div>
      <div>
        <h1 class="title">Divisa</h1>
        <p>{{ this.user_old.creditLines[0].currencyCode }}</p>
      </div>
      <div>
        <h1 class="title">DSO dichiarato</h1>
        <p>{{ this.user_old.creditLines[0].estimatedDso }}</p>
      </div>
      <div>
        <h1 class="title">Grace period</h1>
        <q-input class="input-number" rounded outlined v-model="gracePeriod" type="number" dense="dense" />
      </div>
      <div>
        <h1 class="title">DSO totale</h1>
        <p>{{ isNaN(this.sumTotalDso) ?  this.user_old.creditLines[0].estimatedDso:this.sumTotalDso}}</p>
      </div>
    </q-card-section>
  </div>
  <div>
    <q-card-section class="credit-line">
      <div>
        <h1 class="title">Codice SAE</h1>
        <p>{{this.user_old.saeCode }}</p>
      </div>
      <div>
        <h1 class="title">Fatturato annuo</h1>
        <p>{{ this.user_old.annualRevenueAmount }}€</p>
      </div>
      <div>
        <h1 class="title">Dipendenti</h1>
        <p>{{ this.user_old.employeeCount }}</p>
      </div>
      <div>
        <h1 class="title">Esp. tot. mutui</h1>
        <p>{{ this.user_old.eadTotalAmount }}€</p>
      </div>
      <div>
        <h1 class="title">Esp. tot. factoring</h1>
        <p>{{ this.user_old.factoringTotalAmount }}€</p>
      </div>
      <div>
        <h1 class="title">RW</h1>
        <p>{{ this.user_old.rwPercentage }}%</p>
      </div>
    </q-card-section>
  </div>

  <div>
    <q-card-section class="credit-line">
      <div>
        <h1 class="title">Morescore cliente</h1>
        <p>{{this.user_old.assignorMoreScore }}</p>
      </div>
      <div>
        <h1 class="title">CoF</h1>
        <p>{{ this.user_old.creditLines[0].cofPercentage }}%</p>
      </div>
      <div>
        <h1 class="title">CoR</h1>
        <p>{{ this.user_old.creditLines[0].corPercentage }}%</p>
      </div>
      <div>
        <h1 class="title">Costo industriale</h1>
        <p>{{ this.user_old.creditLines[0].industrialCostPercentage }}%</p>
      </div>
      <div>
        <h1 class="title">Costo capitale</h1>
        <p>{{ this.user_old.creditLines[0].capitalCostPercentage }}%</p>
      </div>
    </q-card-section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gracePeriod: null,
    };
  },
  computed: {
    user_old() {
      return this.$store.state.user;
    },
    sumTotalDso() {
      return (
        
        parseInt(this.gracePeriod) +
        parseInt(this.user_old.creditLines[0].estimatedDso)
      );
    },
  },
};
</script>

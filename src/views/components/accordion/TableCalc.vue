<template>
  <div class="title-table">TABELLA CALCOLO</div>
  <div class="table">
    <q-card-section class="credit-line">
      <div class="table-flex">
        <div>
          <h1 class="title">Importo</h1>
          <h1 class="sub-title">
            {{ this.user_old.creditLines[0].amountSum }}€
          </h1>
        </div>
        <div>
          <h1 class="title">Divisa</h1>
          <h1 class="sub-title">
            {{ this.user_old.creditLines[0].currencyCode }}
          </h1>
        </div>
        <div>
          <h1 class="title">DSO dichiarato</h1>
          <h1 class="sub-title">
            {{ this.user_old.creditLines[0].estimatedDso }}
          </h1>
        </div>
        <div>
          <h1 class="title">Grace period</h1>
          <h1 class="sub-title">
            <q-input
              class="my-input-medium"
              rounded
              outlined
              v-model="gracePeriod"
              type="number"
            />
          </h1>
        </div>
        <div>
          <h1 class="title">DSO totale</h1>
          <p>
            {{
              isNaN(this.sumTotalDso)
                ? this.user_old.creditLines[0].estimatedDso
                : this.sumTotalDso
            }}
          </p>
        </div>
      </div>
    </q-card-section>
  </div>
  <div>
    <q-card-section class="credit-line">
      <div class="table-flex">
        <div>
          <h1 class="title">Codice SAE</h1>
          <h1 class="sub-title">{{ this.user_old.saeCode }}</h1>
        </div>
        <div>
          <h1 class="title">Fatturato annuo</h1>
          <h1 class="sub-title">{{ this.user_old.annualRevenueAmount }}€</h1>
        </div>
        <div>
          <h1 class="title">Dipendenti</h1>
          <h1 class="sub-title">{{ this.user_old.employeeCount }}</h1>
        </div>
        <div>
          <h1 class="title">Esp. tot. mutui</h1>
          <h1 class="sub-title">{{ this.user_old.eadTotalAmount }}€</h1>
        </div>
        <div>
          <h1 class="title">Esp. tot. factoring</h1>
          <h1 class="sub-title">{{ this.user_old.factoringTotalAmount }}€</h1>
        </div>
        <div>
          <h1 class="title">RW</h1>
          <h1 class="sub-title">{{ this.user_old.rwPercentage }}%</h1>
        </div>
      </div>
    </q-card-section>
  </div>

  <div>
    <q-card-section class="credit-line">
      <div class="table-flex">
        <div>
          <h1 class="title">Morescore cliente</h1>
          <h1 class="sub-title">{{ this.user_old.assignorMoreScore }}</h1>
        </div>
        <div>
          <h1 class="title">CoF</h1>
          <h1 class="sub-title">
            {{ this.user_old.creditLines[0].cofPercentage }}%
          </h1>
        </div>
        <div>
          <h1 class="title">CoR</h1>
          <h1 class="sub-title">
            {{ this.user_old.creditLines[0].corPercentage }}%
          </h1>
        </div>
        <div>
          <h1 class="title">Costo industriale</h1>
          <h1 class="sub-title">
            {{ this.user_old.creditLines[0].industrialCostPercentage }}%
          </h1>
        </div>
        <div>
          <h1 class="title">Costo capitale</h1>
          <h1 class="sub-title">
            {{ this.user_old.creditLines[0].capitalCostPercentage }}%
          </h1>
        </div>
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

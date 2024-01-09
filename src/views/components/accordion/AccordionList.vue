<template>
  <div>
    <q-expansion-item
      expand-separator
      label="ELENCO CEDUTI"
      class="title-list-transfers"
      dense-toggle
    >
      <q-card no-border>
        <q-card-section class="credit-lines">
          <q-table
            :rows="rows"
            :columns="columns"
            row-key="name"
            :pagination="initialPagination"
            :rows-per-page-options="[10,20,30,40,50,0]"
            rows-per-page-label="Mostra"
            color=$blue-13
          >
            <template v-slot:pagination="scope">
              
                <div>
                  <span class="result">{{ this.rows.length }}</span>
                </div>
                <span> Risultati. </span>
                <span>risultati per pagina</span>
                

              <q-btn
                :disable="scope.isFirstPage"
                @click="scope.firstPage"
                icon="fa-solid fa-caret-left"
                flat
                style="color: #c9cccd"
              >
              </q-btn>
              Pagina {{ scope.pagination.page }} di
              {{ scope.pagesNumber }}

              <q-btn
                :disable="scope.isLastPage"
                @click="scope.lastPage"
                icon="fa-solid fa-caret-right"
                flat
                style="color: #c9cccd"
              ></q-btn>
            </template>
          </q-table>
        </q-card-section>
      </q-card>
    </q-expansion-item>
  </div>
</template>

<script>
const columns = [
  {
    name: "Ragione Sociale",
    required: true,
    label: "Ragione Sociale",
    align: "left",
    field: (row) => row.name,
    sortable: true,
  },
  {
    name: "C.F",
    align: "center",
    label: "C.F",
    field: (row) => row.fiscalCode,
    sortable: true,
  },
  {
    name: "Nazione",
    label: "Nazione",
    field: (row) => row.countryCode,
    sortable: true,
  },
  {
    name: "Importo",
    label: "Importo",
    field: (row) => row.amount,
    sortable: true,
  },
  {
    name: "DSO",
    label: "DSO",
    field: (row) => row.estimatedDso,
    sortable: true,
  },
];
const rows = [];
export default {
  props: ["debtors"],

  setup() {
    return {
      columns,
      rows,
    };
  },
  created() {
    return (this.rows = this.debtors);
  },
};
</script>

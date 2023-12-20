<template>
  <div>
    <q-list bordered class="rounded-borders">
      
      <q-expansion-item
        expand-separator
        label="ELENCO CEDUTI"
        class="title-list-transfers"
      >
        <q-card>
          <q-card-section class="credit-lines">
          
            <q-table
              :rows="rows"
              :columns="columns"
              row-key="name"
              :pagination="initialPagination"
            >
              
              <template v-slot:pagination="scope">
                {{this.rows.length}} Risultati. Mostra
                <q-btn
                  :disable="scope.isFirstPage"
                  @click="scope.firstPage"
                  icon="fa-solid fa-caret-left"
                  flat
                  style="color:#C9CCCD"
                >
                
                </q-btn>
                <!-- <pre>{{scope}} </pre> -->
                Pagina {{ scope.pagination.page }} di
                {{ scope.pagesNumber }}
                
                <q-btn
                  :disable="scope.isLastPage"
                  @click="scope.lastPage"
                  icon="fa-solid fa-caret-right"
                  flat
                  style="color:#C9CCCD"
                ></q-btn>
              </template>
            </q-table>
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>
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

<template>
  <div>
    <q-list bordered class="rounded-borders">
      <q-expansion-item expand-separator label="ELENCO CEDUTI" class="title-table">
        <q-card>
          <q-card-section class="credit-lines">
            <q-table :rows="rows" :columns="columns" row-key="name" />
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
    field: (row) => row.amount ,
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

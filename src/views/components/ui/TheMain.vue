<template>
  <main>
    <div class="container">
      <div class="banca-project">
        <div class="banca-project-hero-info">
          <h1 class="title">Calcolo pricing factoring</h1>
          <div>
            <label>ID opportunità</label>
            <span class="badge-id">{{ opportunityId }}</span>
          </div>
        </div>
        <div class="banca-project-hero-info">
          <div>
            <div class="info-data">
              <div>
                <label>Ragione Sociale: </label>
                <label>{{ assignorName }} </label>
              </div>
              <div>
                <label>Codice Fiscale: </label>
                <label>{{ assignorFiscalCode }} </label>
              </div>
              <div>
                <label>Partita Iva: </label>
                <label>{{ assignorVatCode }} </label>
              </div>
              <button class="badge-tool">Apri tool di calcolo DSO</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <slot name="main-content"></slot>
  </main>
</template>

<script>
export default {
  props: [
    "opportunityId",
    "assignorName",
    "assignorVatCode",
    "assignorFiscalCode",
  ],
};
</script>

<template>
  <header>
    <div class="container">
      <img class="logo" src="../../../assets/logo.svg" alt="Logo-Banca-Progetto" />
      <p>{{ ownerName }}</p>
    </div>
  </header>
</template>

<script>
export default {
  props: ["ownerName"],
};
</script>

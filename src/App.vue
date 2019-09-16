<template>
  <div id="app" class="container">
    <h3>Cadastro de clientes</h3>
    <hr>
    <grid-cliente></grid-cliente>
  </div>
</template>

<script>
import GridCliente from "./components/GridClientesComponent";

export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    GridCliente
  }
};
</script>

<style>
</style>

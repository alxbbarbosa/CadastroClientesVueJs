<template>
  <div id="app" >
    <Header></Header>
      <div class="row">
        <div class="container">
        <h3>Cadastro de clientes</h3>
        <hr>
        <grid-cliente></grid-cliente>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/HeaderComponent";
import Footer from "./components/FooterComponent";
import GridCliente from "./components/GridClientesComponent";

export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    Header,
    GridCliente
  }
};
</script>

<style>
</style>

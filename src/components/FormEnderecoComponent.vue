<template>
  <div>
    <b-modal id="form-endereco" size="xl" v-b-modal.modal-prevent-closing centered title="Endereço">
      <div class="form-group form-row">
        <div class="form-group form-row col-sm-12">
          <label for="" class="col-form-label col-sm-2 text-right">CEP:</label>
          <input type="text" class="form-control col-sm-2"
            name="cep" v-model="endereco.cep" v-validate="'required'"
            :class="{'danger-border' : errors.has('cep')}">
        </div>
        <div class="form-group form-row col-sm-12">
          <label for="" class="col-form-label col-sm-2 text-right">Logradouro:</label>
          <input type="text" class="form-control col-sm-7"
            name="logradouro" v-model="endereco.logradouro" v-validate="'required'"
            :class="{'danger-border' : errors.has('logradouro')}">
          <label for="" class="col-form-label col-sm-2 text-right">Número:</label>
          <input type="text" class="form-control col-sm-1" v-model="endereco.numero">
        </div>
        <div class="form-group form-row">
          <ul v-if="errors.any()" class="avisos">
            <li v-if="errors.has('cep')">{{ errors.first('cep') }}</li>
            <li v-if="errors.has('logradouro')">{{ errors.first('logradouro') }}</li>
          </ul>
        </div>
        <div class="form-group form-row col-sm-12">
          <label for="" class="col-form-label col-sm-2 text-right">Complemento:</label>
          <input type="text" class="form-control col-sm-4" v-model="endereco.complemento">
          <label for="" class="col-form-label col-sm-2 text-right">Bairro:</label>
          <input type="text" class="form-control col-sm-4" v-model="endereco.bairro">
        </div>
        <div class="form-group form-row col-sm-12">
          <label for="" class="col-form-label col-sm-2 text-right">Cidade:</label>
          <input type="text" class="form-control col-sm-4"
            name="cidade" v-model="endereco.cidade" v-validate="'required'"
            :class="{'danger-border' : errors.has('cidade')}">
          <label for="" class="col-form-label col-sm-2 text-right">UF:</label>
          <input type="text" class="form-control col-sm-1"
            name="uf" v-model="endereco.uf" v-validate="'required'"
            :class="{'danger-border' : errors.has('uf')}">
        </div>
        <div class="form-group form-row">
          <ul v-if="errors.any()" class="avisos">
            <li v-if="errors.has('cidade')">{{ errors.first('cidade') }}</li>
            <li v-if="errors.has('uf')">{{ errors.first('uf') }}</li>
          </ul>
        </div>
      </div>
      <template v-slot:modal-footer="{ ok, cancel, hide }">
        <b-button size="sm" variant="success" @click="save()">
          Salvar
        </b-button>
        <b-button size="sm" variant="danger" @click="cancel()">
          Cancela
        </b-button>
      </template>
    </b-modal>
    <flash-message :position="'right top'"></flash-message>
  </div>
</template>

<script>
export default {
  props: {
    endereco: {
      required: true,
      type: Object,
      default: {}
    }
  },
  data() {
    return {};
  },
  methods: {
    save() {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.$emit("saveEndereco", this.cliente);
        } else {
          this.flashMessage.error({
            title: "Registro não pode ser salvo!",
            message: "Você deve verificar alguns campos necessários"
          });
        }
      });
    }
  }
};
</script>

<style scoped>
.avisos {
  font-family: "Courier New", Courier, monospace;
  color: #ff0000;
  font-weight: bold;
  font-size: 12px;
}
.danger-border {
  border: 2px solid #ff0000;
}
.success-border {
  border: 2px solid #009900;
}
</style>

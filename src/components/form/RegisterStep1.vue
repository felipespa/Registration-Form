<template>
  <v-container class="step1-container">
    <v-row>
      <v-col cols="12">
        <h4>Pessoa:</h4>
        <v-radio-group row v-model="selected">
          <v-radio label="Fisica" value="F"></v-radio>
          <v-radio label="Juridica" value="J"></v-radio>
        </v-radio-group>
      </v-col>

      <!-- Caso Seja Pessoa Fisica -->
      <template v-if="selected === 'F'">
        <v-col cols="12" md="4">
          <v-text-field label="Nome Completo" required></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            label="CPF"
            v-mask="'###.###.###-##'"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field label="Email" type="email" required></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            label="Telefone"
            v-mask="'(##)####-####.###-##'"
            type="email"
            required
          ></v-text-field>
        </v-col>
      </template>

      <!-- Caso Seja Pessoa Juridica -->
      <template v-if="selected === 'J'">
        <v-col cols="12" md="4">
          <v-text-field label="Razão Social" required></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field label="Nome Fantasia" required></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field label="CNPJ" required></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field label="Inscrição Estadual" required></v-text-field>
        </v-col>

        <v-col cols="12">
          <h4>Tipo Empresa:</h4>
          <v-radio-group row v-model="CompanyType">
            <v-radio label="Empresa de Software" value="S"></v-radio>
            <v-radio
              label="Integrador / Representante do Software"
              value="I"
            ></v-radio>
            <v-radio label="Empresa de Outro Ramo" value="O"></v-radio>
          </v-radio-group>
        </v-col>
      </template>

      <v-col cols="12" md="4">
        <v-text-field label="Email" required></v-text-field>
      </v-col>

      <!-- Endereço -->
      <v-col cols="12">
        <h4>Endereço</h4>
      </v-col>
      <v-col cols="12" md="4">
        <v-text-field
          @keyup="handleCep"
          label="CEP"
          v-model="cep"
          v-mask="'#####-###'"
          required
        ></v-text-field>
      </v-col>

      <v-col cols="12" md="4">
        <v-text-field
          label="Cidade"
          v-model="address.city"
          required
        ></v-text-field>
      </v-col>

      <v-col cols="12" md="4">
        <v-text-field
          label="Bairro"
          v-model="address.neighborhood"
          required
        ></v-text-field>
      </v-col>

      <v-col cols="12" md="4">
        <v-text-field
          label="Estado"
          v-model="address.state"
          required
        ></v-text-field>
      </v-col>
    </v-row>

    <div class="loading" v-if="loading">
      <v-progress-circular
        :size="50"
        indeterminate
        color="primary"
      ></v-progress-circular>
    </div>
  </v-container>
</template>

<script>
import { getCep } from "@/data/api/location";

export default {
  data() {
    return {
      loading: false,
      selected: "F",
      cep: "",
      address: {
        city: "",
        state: "",
        neighborhood: "",
        street: "",
      },
    };
  },
  methods: {
    handleCep: async function () {
      if (this.cep.length >= 9) {
        this.loading = true;
        const response = await getCep(this.cep);

        if (response) {
          this.address.city = response.city;
          this.address.state = response.state;
          this.address.street = response.street;
          this.address.neighborhood = response.neighborhood;
        }
        this.loading = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.step1-container {
  .loading {
    transition: 0.4s ease-in-out;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>

<template>
  <v-container class="step4-container">
    <v-row>
      <v-col cols="12">
        <h4>Dados do Responsável Financeiro.</h4>
      </v-col>

      <v-col cols="12">
        <span>Dia preferencial para vencimento.</span>

        <v-select
          class="date"
          v-model="selectedDay"
          :items="days"
          label="Dia Vencimento"
        ></v-select>
      </v-col>

      <v-col cols="12">
        <v-checkbox
          @click="handleFieldsData()"
          v-model="checkbox"
          value="true"
          cols="12"
          label="Desejo usar os dados do administrado para preencher estes campos."
        ></v-checkbox>
      </v-col>

      <v-col cols="12" md="6">
        <v-text-field
          label="Nome Completo"
          v-model="admFields.name"
          required
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="6">
        <v-text-field
          type="email"
          label="Email"
          v-model="admFields.email"
          required
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="6">
        <v-text-field
          type="password"
          label="Senha"
          v-model="admFields.password"
          required
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="6">
        <v-text-field
          type="password"
          label="Confirme a senha"
          v-model="admFields.confirmPassword"
          required
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="4">
        <v-text-field
          label="Telefone"
          v-mask="'(##)###?#-####'"
          type="email"
          v-model="admFields.phone"
          required
        ></v-text-field>
      </v-col>
      <!-- fim -->
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      days: [10, 15, 20, 25, 30],
      selectedDay: "",
      admFields: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone: "",
      },
      checkbox: false,
    };
  },
  computed: {
    ...mapGetters({
      content: "formData/getContent",
    }),
  },
  methods: {
    handleFieldsData() {
      if (this.checkbox) {
        this.admFields = this.content;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.step4-container {
  .date {
    width: 150px;
  }
}
</style>

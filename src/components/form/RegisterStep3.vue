<template>
  <v-container class="step3-container">
    <v-row>
      <v-col cols="12">
        <h4>Área Restrita - Informações Administrativas:</h4>
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

      <!-- Técnico Responsavel -->
      <v-col cols="12">
        <h4>Técnico Responsável:</h4>
      </v-col>
      <v-col cols="12">
        <v-checkbox
          @click="handleFieldsData()"
          cols="12"
          v-model="checkData"
          label="Desejo usar os dados do administrado para preencher estes campos."
        ></v-checkbox>
      </v-col>

      <v-col cols="12" md="6">
        <v-text-field
          label="Nome Completo"
          v-model="technicalFields.name"
          required
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="6">
        <v-text-field
          type="email"
          label="Email"
          v-model="technicalFields.email"
          required
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="6">
        <v-text-field
          type="password"
          label="Senha"
          v-model="technicalFields.password"
          required
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="6">
        <v-text-field
          type="password"
          label="Confirme a senha"
          v-model="technicalFields.confirmPassword"
          required
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="4">
        <v-text-field
          label="Telefone"
          v-mask="'(##)###?#-####'"
          type="email"
          v-model="technicalFields.phone"
          required
        ></v-text-field>
      </v-col>
      <!-- fim -->
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      admFields: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone: "",
      },
      technicalFields: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone: "",
      },
      auxAdmFields: [],
      checkData: "",
    };
  },
  watch: {
    admFields: {
      handler: function () {
        if (
          this.admFields.name !== "" &&
          this.admFields.email !== "" &&
          this.admFields.password !== "" &&
          this.admFields.password !== "" &&
          this.admFields.confirmPassword !== "" &&
          this.admFields.phone.length >= 8
        ) {
          this.saveData();
        }
      },
      deep: true,
    },
  },
  mounted() {
    this.auxAdmFields = this.admFields;
  },
  methods: {
    handleFieldsData() {
      if (this.checkData) {
        this.technicalFields.name = this.admFields.name;
        this.technicalFields.email = this.admFields.email;
        this.technicalFields.password = this.admFields.password;
        this.technicalFields.confirmPassword = this.admFields.confirmPassword;
        this.technicalFields.phone = this.admFields.phone;
      } else {
        this.technicalFields = {};
      }
    },
    async saveData() {
      await this.$store.dispatch("formData/saveContent", this.auxAdmFields);
    },
  },
};
</script>

<style lang="scss" scoped></style>

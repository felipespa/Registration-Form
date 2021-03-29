<template>
  <v-container class="step2-container">
    <v-row>
      <!-- Linguagens -->
      <v-col cols="12">
        <h4>Selecione as linguaguens utilizadas</h4>
      </v-col>

      <v-col
        cols="12"
        md="2"
        v-for="language in languages"
        :key="'L' + language.id"
      >
        <v-checkbox
          v-model="selectedLanguages"
          :label="language.text"
          :value="language.value"
        ></v-checkbox>
      </v-col>

      <v-col cols="12" v-if="handleOptions(1)">
        <v-text-field
          label="Separe por virgula as linguagens. Ex: Go, .Net"
          required
        ></v-text-field>
      </v-col>
      <!-- fim -->

      <!-- Ramo Atividades -->
      <v-col cols="12">
        <h4>Selecione um ramo de rtividade</h4>
      </v-col>
      <v-col cols="12" md="2" v-for="type in companyType" :key="'C' + type.id">
        <v-checkbox
          v-model="selectedCompany"
          :label="type.text"
          :value="type.value"
        ></v-checkbox>
      </v-col>
      <!-- fim -->

      <!-- Cliente Em: -->
      <v-col cols="12">
        <h4>Possui clientes em:</h4>
      </v-col>

      <div class="uf-list">
        <div class="list" v-for="(state, index) in UF" :key="'S' + index">
          <v-checkbox
            @click="handleSelectAll(state)"
            v-model="selectedUF"
            :label="state"
            :value="state"
          ></v-checkbox>
        </div>

        <div></div>
      </div>
      <!-- fim -->

      <!-- Comercialização -->
      <v-col cols="12">
        <h4>Comercialização do ERP</h4>
      </v-col>

      <v-col
        cols="12"
        md="2"
        v-for="item in commercialization"
        :key="'E' + item.id"
      >
        <v-checkbox
          v-model="selectedOptions"
          :label="item.text"
          :value="item.value"
        ></v-checkbox>
      </v-col>
      <v-col cols="12" v-if="handleOptions(2)">
        <v-text-field label="Outros:" required></v-text-field>
      </v-col>
      <!-- fim -->

      <!-- Clientes -->
      <v-col cols="12">
        <h4>Informações sore o cliente</h4>
      </v-col>
      <v-col cols="12" md="4">
        <v-text-field label="Principais clientes" required></v-text-field>
      </v-col>
      <v-col cols="12" md="4">
        <v-text-field
          v-mask="'#########'"
          label="Quantidade de clientes"
          required
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="4">
        <v-text-field
          v-mask="'#########'"
          label="Numero de funcionários"
          required
        ></v-text-field>
      </v-col>
      <!-- fim -->
    </v-row>
  </v-container>
</template>

<script>
import { getStates } from "@/data/api/location";

export default {
  data() {
    return {
      languages: [
        {
          id: 1,
          text: "Delphi",
          value: "delphi",
        },
        {
          id: 2,
          text: "Java",
          value: "java",
        },
        {
          id: 3,
          text: "C#",
          value: "c#",
        },
        {
          id: 4,
          text: "PHP",
          value: "php",
        },
        {
          id: 5,
          text: "Outras",
          value: "outras",
        },
      ],
      companyType: [
        {
          id: 1,
          text: "Varejo",
          value: "varejo",
        },
        {
          id: 2,
          text: "Industria",
          value: "industria",
        },
        {
          id: 3,
          text: "Comércio",
          value: "comercio",
        },
        {
          id: 4,
          text: "Transporte",
          value: "transporte",
        },
      ],
      commercialization: [
        {
          id: 1,
          text: "Locação",
          value: "locação",
        },
        {
          id: 2,
          text: "Venda",
          value: "venda",
        },
        {
          id: 3,
          text: "Outros",
          value: "outros",
        },
      ],
      UF: ["Todos"],
      selectedCompany: [],
      selectedLanguages: [],
      selectedOptions: [],
      selectedUF: [],
    };
  },
  mounted() {
    this.handleStates();
  },
  methods: {
    handleOptions(i) {
      if (i === 1 && this.selectedLanguages.includes("outras")) {
        return true;
      } else if (i === 2 && this.selectedOptions.includes("outros")) {
        return true;
      } else {
        return false;
      }
    },
    handleStates: async function () {
      const response = await getStates();

      response.forEach((state) => {
        this.UF.push(state.sigla);
      });
    },
    handleSelectAll(state) {
      if (state === "Todos" && this.selectedUF.includes("Todos") == false) {
        this.selectedUF = [];
      } else if (state === "Todos") {
        this.selectedUF = this.UF;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.step2-container {
  .uf-list {
    display: flex;
    justify-content: center;
    width: 100%;
    flex-wrap: wrap;
    padding: 12px;
    /* margin-left: 20%; */

    .list {
      display: flex;
      justify-content: space-between;
      margin: auto;
      max-width: 25%;
      width: 100%;
      height: 40px;
    }
  }
}
</style>

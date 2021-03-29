<template>
  <v-container class="home">
    <h1>Ficha Cadastral</h1>
    <h3>Percentual Cadastro {{ percent }}%</h3>
    <v-progress-linear
      color="light-blue"
      height="10"
      :value="handlePercent()"
      striped
    ></v-progress-linear>
    <v-form v-if="step <= 4">
      <div class="form-content">
        <Step1 v-if="step === 1" />
        <Step2 v-if="step === 2" />
        <Step3 v-if="step === 3" />
        <Step4 v-if="step === 4" />
      </div>
    </v-form>

    <div class="button" v-if="step <= 4">
      <v-btn v-if="step > 1" @click="handlePrev()" elevation="2" medium plain
        >Anterior</v-btn
      >
      <v-btn class="next" @click="handleNext()" elevation="2" medium plain
        >Próximo</v-btn
      >
    </div>

    <div class="final" v-if="step > 4">
      <h1>Cadastro Concluido!</h1>
      <h2>Por Favor, Aguarde Nossa Equipe Entrar em Contato.</h2>
    </div>
  </v-container>
</template>

<script>
import Step1 from "@/components/form/RegisterStep1";
import Step2 from "@/components/form/RegisterStep2";
import Step3 from "@/components/form/RegisterStep3";
import Step4 from "@/components/form/RegisterStep4";

export default {
  name: "Home",
  data() {
    return {
      step: 1,
      percent: 0,
      dataInfo: "",
    };
  },
  components: {
    Step1,
    Step2,
    Step3,
    Step4,
  },
  methods: {
    handlePercent() {
      switch (this.step) {
        case 1:
          this.percent = 0;
          break;

        case 2:
          this.percent = 25;
          break;

        case 3:
          this.percent = 50;
          break;

        case 4:
          this.percent = 75;
          break;

        case 5:
          this.percent = 100;
          break;

        default:
          this.percent = 0;
          break;
      }
      return this.percent;
    },
    handleNext() {
      this.step += 1;
    },
    handlePrev() {
      this.step -= 1;
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  max-width: 1440px;
  padding: 3rem;

  h1 {
    padding: 1rem 0;
    color: rgb(53, 53, 53);
  }
  h3 {
    color: #1976d2;
  }
  .v-form {
    width: 90%;
    margin: auto;
    padding: 1rem;

    .form-content {
      border-radius: 6px;
      padding: 2rem;
      background: rgba(255, 255, 255, 0.5);
      box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
        0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12) !important;
    }
  }
  .button {
    display: flex;
    justify-content: space-around;
    width: 100%;

    .next {
      background: #1976d2 !important;
      color: rgb(255, 255, 255);

      span {
        opacity: 1 !important;
      }
    }
  }
  .final {
    text-align: center;
    padding: 3em;
    h1 {
      font-size: 100px;
      font-weight: 900;
      margin: 0;
      line-height: 0.8;
      color: #aaaaaa;
    }
    h2 {
      color: #aaaaaa;
      font-weight: 500;
      letter-spacing: 3px;
      margin: 20px 0;
    }
  }
}
</style>

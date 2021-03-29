import Vue from "vue";

const getCep = async function (cep) {
  try {
    const response = await Vue.axios.get(
      `https://brasilapi.com.br/api/cep/v1/${cep}`
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const getStates = async function () {
  try {
    const response = await Vue.axios.get(
      "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export { getCep, getStates };

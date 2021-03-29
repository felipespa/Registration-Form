const state = {
  content: {},
};

// Getters
const getters = {
  getContent(state) {
    return state.content;
  },
};

// Mutations
const mutations = {
  SAVE_ALL_CONTENT(state, { content }) {
    state.content = content;
    console.log(state.content);
  },
};

// Actions
const actions = {
  async saveContent({ commit }, content) {
    commit("SAVE_ALL_CONTENT", { content });
    return true;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};

export const state = () => ({
  counter: 0,
  settings: {}
});

export const mutations = {
  increment(state) {
    state.counter++;
  },
  loadSettings(settings) {
    state.settings = settings;
  }
};

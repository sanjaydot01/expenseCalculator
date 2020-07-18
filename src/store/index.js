import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: "Welcome To Expense Calculator",
    expenses: [{ formdate: "", formitem: "", formamount: "" }],
  },
  mutations: {
    setExpenses(state, value) {
      state.formdate = value;
      state.formitem = value;
      state.formamount = value;
    },
    addExpenses(state) {
      state.expenses.push({
        formdate: state.formdate,
        formitem: state.formitem,
        formamount: state.formamount,
      });
    },
  },
  actions: {},
  modules: {},
});

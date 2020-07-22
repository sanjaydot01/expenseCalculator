import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    formdate: "",
    formitem: "",
    formamount: "",
    title: "Welcome To Expense Calculator",
    expenses: [],
  },
  mutations: {
    setDate(state, value) {
      state.formdate = value;
    },
    setItem(state, value) {
      state.formitem = value;
    },
    setAmount(state, value) {
      state.formamount = value;
    },
    addExpenses(state) {
      state.expenses.push({
        formdate: state.formdate,
        formitem: state.formitem,
        formamount: state.formamount,
      });
      (state.formdate = ""), (state.formitem = ""), (state.formamount = "");
    },
    deleteMe(state, expense) {
      const deleteIndex = state.expenses.indexOf(expense);
      state.expenses.splice(deleteIndex, 1);
      console.log(deleteIndex);
    },
    editMe() {
      console.log("Edit Me");
    },
  },
  actions: {},
  modules: {},
});

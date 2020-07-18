<template>
  <div class="home">
    <h1>Add New Expense</h1>
    <div class="container">
      <form @submit.prevent="addExpenses" action="">
        <label for="example-datepicker">Choose a date</label>
        <b-form-datepicker
          id="example-datepicker"
          v-model="formdate"
          class="mb-2"
        ></b-form-datepicker>
        <p>Value: ' '</p>
        <label for="">Add Items</label>
        <input type="text" v-model="formitem" />
        <label for="">Add Amount:</label>
        <input type="number" v-model="formamount" />
        <button type="submit">Add</button>
      </form>

      <h1>Display Result</h1>
      <li v-for="(expense, index) in expenses" :key="index">
        <span>{{ expense.formdate }}</span>
        <span>{{ expense.formitem }}</span>
        <span>{{ expense.formamount }}</span>
      </li>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    formdate: {
      get() {
        return this.$store.state.formdate;
      },
      set(value) {
        this.$store.commit("setExpenses", value);
      },
    },
    formitem: {
      get() {
        return this.$store.state.formitem;
      },
      set(value) {
        this.$store.commit("setExpenses", value);
      },
    },
    formamount: {
      get() {
        return this.$store.state.formamount;
      },
      set(value) {
        this.$store.commit("setExpenses", value);
      },
    },
    ...mapState(["title", "expenses"]),
  },
  methods: {
    ...mapMutations(["addExpenses"]),
  },
};
</script>

<style>
.container {
}
form label {
  display: block;
}
form input {
  display: block;
}
</style>

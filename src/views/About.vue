<template>
  <div class="about container">
    <h1>List of Expenses</h1>
    <date-picker
      v-model="range"
      lang="en"
      range
      type="date"
      width="500"
      format="YYYY-MM-DD"
    ></date-picker>
    {{ range }}
    <li v-for="(rang, index) in range" :key="index">{{ rang }}</li>

    <table class="table">
      <thead>
        <tr>
          <th scope="col">S.N</th>
          <th scope="col">Date</th>
          <th scope="col">Items</th>
          <th scope="col">Amount</th>
          <th scope="col">Edit</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(expense, index) in expenses" :key="index">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ expense.formdate }}</td>
          <td>{{ expense.formitem }}</td>
          <td>{{ expense.formamount }}</td>
          <td>
            <button v-on:click="editMe(expense)">Edit</button>
          </td>
          <td><button v-on:click="deleteMe(expense)">Delete</button></td>
        </tr>
      </tbody>
    </table>

    <hr />
    <h2>Original</h2>
    <li v-for="(expense, index) in expenses" :key="index">
      <span>{{ expense.formdate }} </span>
      <span>{{ expense.formitem }}</span>
      <span>{{ expense.formamount }}</span>
      <button v-on:click="editMe(expense)">Edit</button>
      <button v-on:click="deleteMe(expense)">Delete</button>
    </li>
  </div>
</template>

<script>
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
import { mapMutations, mapState } from "vuex";
export default {
  data() {
    return {
      date: "",
      range: "",
    };
  },
  components: {
    DatePicker,
  },
  computed: {
    ...mapState(["expenses"]),
  },
  methods: {
    ...mapMutations(["deleteMe", "editMe"]),
    datearrays: {},
  },
};
</script>
<style>
.view {
  border-color: transparent;
  background-color: initial;
  color: initial;
}
.duplicate {
  background-color: blueviolet;
  display: flex;
}
</style>

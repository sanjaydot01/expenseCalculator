<template>
  <div class="about ">
    <div class="title">
    <h1>List of Expenses</h1>
    </div>

    <table class="table table-dark  table-hover">
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
            <button class="btn btn-success" v-on:click="editMe(expense)">
              Edit
            </button>
          </td>
          <td>
            <button class="btn btn-danger" v-on:click="deleteMe(expense)">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>


  </div>
</template>

<script>
import { formatISO } from "date-fns";
import { eachDayOfInterval } from "date-fns";
import { mapMutations, mapState } from "vuex";
export default {
  data() {
    return {
      date: "",
      final: [],
    };
  },

  computed: {
    ...mapState(["expenses"]),
  },
  methods: {
    ...mapMutations(["deleteMe", "editMe"]),
    datearrays: function() {
      var startdate = this.range[0];
      var enddate = this.range[1];

      var result = eachDayOfInterval({
        start: new Date(startdate),
        end: new Date(enddate),
      });
      this.final = result.map((resultDate) => {
        return formatISO(new Date(resultDate), { representation: "date" });
      });
    },
    filtereddate: function() {
      const filteredexpense = this.expenses.filter((expense) => {
        console.log(expense.formdate);
        return this.final.find((abc) => {
          return abc == expense.formdate;
        });
      });
      console.log(filteredexpense);
    },
  },
};
</script>
<style>
.title h1 {
  text-align: center;
  margin: 10px;
  text-transform: uppercase;
}
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

<template>
  <div class="home">
    <div class="container">
      <form
        class="form-group"
        @submit.prevent="
          addExpenses();
          alerts();
        "
        action=""
      >
        <div>
          <h1 style=" display:inline-block">Add New Expense</h1>
          <div class="form-group w-75">
            <label for="example-datepicker">Choose a date</label>
            <b-form-datepicker
              id="example-datepicker"
              v-model="formdate"
              class="mb-2"
            ></b-form-datepicker>
          </div>
          <div class="form-group w-75">
            <label for="additems">Add Items</label>
            <input
              required
              type="text"
              v-model="formitem"
              class="form-control "
              placeholder="Enter items"
            />
          </div>
          <div class="form-group w-75">
            <label for="amount">Add Amount</label>
            <input
              required
              type="number"
              v-model="formamount"
              class="form-control"
              placeholder="Enter amount"
            />
          </div>
        </div>
        <button
          class="btn btn-success btn-block form-group w-75 "
          type="submit"
        >
          Add
        </button>
        <div class="div">
          <button class="btn btn-warning">
            <router-link to="/">Dashboard</router-link>
          </button>

          <button class="btn btn-warning">
            <router-link to="report">Report</router-link>
          </button>
          <router-vew />
        </div>
      </form>
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
        this.$store.commit("setDate", value);
      },
    },
    formitem: {
      get() {
        return this.$store.state.formitem;
      },
      set(value) {
        this.$store.commit("setItem", value);
      },
    },
    formamount: {
      get() {
        return this.$store.state.formamount;
      },
      set(value) {
        this.$store.commit("setAmount", value);
      },
    },
    ...mapState(["title", "expenses"]),
  },
  methods: {
    ...mapMutations(["addExpenses", "setDate", "setItem", "setAmount"]),
    alerts: function() {
      alert("Data Added");
    },
  },
};
</script>

<style scoped>
* {
  color: black;
}
body {
  opacity: 0.88;
  background-image: url("../assets/money.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  min-height: 99vh;
  background-position: fixed;
}
.container {
}
form label {
  display: block;
  padding: 10px;
}
form input {
  display: block;
}
#app > div.home > div:nth-child(1) > form > button {
  margin-top: 15px;
}
form {
  background-color: rgb(190, 165, 165);
  opacity: 1;
  color: #000000;
  padding: 80px 100px;
  margin-top: 30px;
  -webkit-box-shadow: 10px 10px 7px 1px rgba(0, 0, 0, 0.79);
  -moz-box-shadow: 10px 10px 7px 1px rgba(0, 0, 0, 0.79);
  box-shadow: 10px 10px 7px 1px rgba(0, 0, 0, 0.79);
  border-radius: 25px 25px 25px 25px;
  -moz-border-radius: 25px 25px 25px 25px;
  -webkit-border-radius: 25px 25px 25px 25px;
  border: 0px solid #000000;
}
.div button {
  margin: 0px 5px;
  margin-top: 15px;
}
</style>

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
        <div id="main">
          <h1>Add New Expense</h1>
          <div class="form-group col-auto ">
            <label for="example-datepicker">Choose a date</label>
            <b-form-datepicker
              id="example-datepicker"
              v-model="formdate"
              class="mb-2"
            ></b-form-datepicker>
          </div>
          <div class="form-group col-auto">
            <label for="additems">Add Items</label>
            <input
              required
              type="text"
              v-model="formitem"
              class="form-control "
              placeholder="Enter items"
            />
          </div>
          <div class="form-group col-auto ">
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
        <button class=" add btn btn-success " type="submit">
          Add
        </button>
        <div class="div">
          <button class="btn btn-warning">
            <router-link to="/">Dashboard</router-link>
          </button>

          <button class="btn btn-warning">
            <router-link to="report">Report</router-link>
          </button>
          <router-view />
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
.container {
  margin-top: 5px;
}
.container form {
  min-height: 550px;
  height: auto;
  width: auto;
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
  background-color: rgb(158, 146, 146);
  color: #000000;
  -webkit-box-shadow: 10px 10px 7px 1px rgba(0, 0, 0, 0.79);
  -moz-box-shadow: 10px 10px 7px 1px rgba(0, 0, 0, 0.79);
  box-shadow: 10px 10px 7px 1px rgba(0, 0, 0, 0.79);
  border-radius: 25px 25px 25px 25px;
  -moz-border-radius: 25px 25px 25px 25px;
  -webkit-border-radius: 25px 25px 25px 25px;
  border: 0px solid #000000;
}

.add {
  text-align: center;
  width: 80px;
  justify-content: center;
  margin: 5px 15px;
  padding: 6px;
}
.div {
  margin: 10px;
}
.div button {
  margin: 0px 5px;
}
#main h1{
  text-align: center;
  padding-top: 20px;
}
</style>

<template>
  <div class="home">
    <h1>Welcome to Expense Calculator</h1>
    {{ dates() }}
    <div class="content">
     <div class="card">
        <img
          class="card-img-top"
          src="../assets/today1.jpg"
          alt="Card image cap"
        />
        <div class="card-body">
          <p class="card-title">Today</p>
          <h1>Rs. {{ dates() }}</h1>
        </div>
      </div>
     <div class="card">
        <img
          class="card-img-top"
          src="../assets/yesterday4.jpg"
          alt="Card image cap"
        />
        <div class="card-body">
          <p class="card-title">Yesterday</p>
          <h1>Rs. {{ dates() }}</h1>
        </div>
      </div>

      <div class="card">
        <img
          class="card-img-top"
          src="../assets/seven2.jpg"
          alt="Card image cap"
        />
        <div class="card-body">
          <p class="card-title">Last 7 Days</p>
          <h1>Rs. {{ dates() }}</h1>
        </div>
      </div>

      <div class="card">
        <img
          class="card-img-top"
          src="../assets/yesterday.jpg"
          alt="Card image cap"
        />
        <div class="card-body">
          <p class="card-title">Last 30 Days</p>
          <h1>Rs. {{ dates() }}</h1>
        </div>
      </div>

      <div class="card">
        <img
          class="card-img-top"
          src="../assets/seven2.jpg"
          alt="Card image cap"
        />
        <div class="card-body">
          <p class="card-title">All</p>
          <h1>Rs. {{ add() }}</h1>
        </div>
      </div>
    </div>

    <h2>Array Methods</h2>
    <li v-for="(expense, index) in expenses" :key="index">
      {{ expense.formamount }}
    </li>
    <h5>Total Here:{{ add() }}</h5>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Home",
  data() {
    return {};
  },
  computed: {
    ...mapState(["expenses"]),
  },

  methods: {
    add: function() {
      const total = this.expenses.reduce((currenttotal, expense) => {
        return currenttotal + +expense.formamount;
      }, 0);
      return total;
    },
    dates: function() {
      var date = new Date();

      console.log(date.toISOString());

      date.setDate(date.getDate() + 7);
      const filtereditems = this.expenses.filter((expense) => {
        return expense.formdate <= date.toISOString();
      });
      console.log(filtereditems);

      const total7 = filtereditems.reduce((currenttotal, expense) => {
        return currenttotal + +expense.formamount;
      }, 0);
      return total7;
    },
  },
};
</script>
<style scoped>
body {
  background-image: url("../assets/background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}
</style>

<style scoped>
.home h1 {
  text-align: center;
  margin-top: 20px;
}
.content {
  background-color: blue;
  margin: 30px;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
}
.content .card {

  width: 18rem;
  background-color: coral;
  margin: auto;
  padding: 10px;
}
.card-title {
  text-align: center;
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: 700;
}
.card-body {
  border: 1px solid black;
  margin-top: 10px;
}
</style>

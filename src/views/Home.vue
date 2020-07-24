<template>
  <div class="home">
    <div class="title">
      <h1>Welcome to Expense Calculator</h1>
    </div>
    <div class="datepicker">
      <div class="datepickerbutton">
        <button class="btn btn-warning">
          Calculate Expense from Custom Date Here
        </button>
      </div>

      <date-picker
        placeholder="Select two dates"
        v-model="range"
        lang="en"
        range
        type="date"
        width="500"
        format="YYYY-MM-DD"
      ></date-picker>
      <button
        class="btn btn-primary"
        @click="
          datearrays();
          filtereddate();
        "
      >
        Calculate
      </button>
    </div>
    <div class="content">
      <div class="card">
        <img
          class="card-img-top"
          src="../assets/today1.jpg"
          alt="Card image cap"
        />
        <div class="card-body">
          <p class="card-title"><br />Today</p>
          <h1>Rs. {{ todaysexpenses }}</h1>
        </div>
      </div>

      <div class="card">
        <img
          class="card-img-top"
          src="../assets/yesterday4.jpg"
          alt="Card image cap"
        />
        <div class="card-body">
          <p class="card-title">Last 7 Days Including Today</p>
          <h1>Rs. {{ addweeks() }}</h1>
        </div>
      </div>

      <div class="card">
        <img
          class="card-img-top"
          src="../assets/yesterday.jpg"
          alt="Card image cap"
        />
        <div class="card-body">
          <p class="card-title">Last 30 Days Including Today</p>
          <h1>Rs. {{ addmonths() }}</h1>
        </div>
      </div>

      <div class="card">
        <img
          class="card-img-top"
          src="../assets/seven2.jpg"
          alt="Card image cap"
        />
        <div class="card-body">
          <p class="card-title"><br />All Expenses</p>
          <h1>Rs. {{ add() }}</h1>
        </div>
      </div>

      <div class="card">
        <img
          class="card-img-top"
          src="../assets/seven.jpg"
          alt="Card image cap"
        />
        <div class="card-body">
          <p class="card-title"><br />Custom Select</p>
          <h1>Rs. {{ addcustom() }}</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { formatISO, subDays } from "date-fns";
import { eachDayOfInterval } from "date-fns";
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";

import { mapState } from "vuex";
export default {
  name: "Home",
  data() {
    return {
      date: "",
      range: "",
      final: [],
      filteredexpense: [],
      weeksarray: [],
      filteredweeks: [],
      monthsarray: [],
      filteredmonths: [],
      today: formatISO(new Date(new Date()), {
        representation: "date",
      }),
      lastweekdateun: subDays(new Date(new Date()), 6),
      lastmonthdateun: subDays(new Date(new Date()), 30),
    };
  },
  computed: {
    ...mapState(["expenses"]),
    todaysexpenses: function() {
      let x = this.expenses.filter((expense) => {
        return expense.formdate == this.today;
      });
      let total = x.reduce((currenttotal, expense) => {
        return currenttotal + +expense.formamount;
      }, 0);
      return total;
    },
  },
  beforeMount() {
    this.lastweek(),
      this.filtered(),
      this.addweeks(),
      this.lastmonth(),
      this.fill(),
      this.addmonths();
  },
  components: {
    DatePicker,
  },

  methods: {
    //add all
    add: function() {
      const total = this.expenses.reduce((currenttotal, expense) => {
        return currenttotal + +expense.formamount;
      }, 0);
      return total;
    },

    //datepicker dates in array
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

    //filter date picker date and match with expense formdate
    filtereddate: function() {
      this.filteredexpense = this.expenses.filter((expense) => {
        console.log(expense.formdate);
        return this.final.find((abc) => {
          return abc == expense.formdate;
        });
      });
      console.log(this.filteredexpense);
    },

    //add formamount of customdate
    addcustom: function() {
      const customadd = this.filteredexpense.reduce((currenttotal, expense) => {
        return currenttotal + +expense.formamount;
      }, 0);
      return customadd;
    },

    //put last week dates in array
    lastweek: function() {
      const lastweekdateformatted = formatISO(new Date(this.lastweekdateun), {
        representation: "date",
      });
      console.log(lastweekdateformatted);
      var weeks = eachDayOfInterval({
        start: new Date(lastweekdateformatted),
        end: new Date(this.today),
      });

      this.weeksarray = weeks.map((wee) => {
        return formatISO(new Date(wee), { representation: "date" });
      });
    },
    //filter last week date and match with expense formdate
    filtered: function() {
      this.filteredweeks = this.expenses.filter((expense) => {
        console.log(expense.formdate);
        return this.weeksarray.find((def) => {
          return def == expense.formdate;
        });
      });
      console.log(this.filteredweeks);
    },
    //add weeks amount in weeks
    addweeks: function() {
      const weeksadd = this.filteredweeks.reduce((currenttotal, expense) => {
        return currenttotal + +expense.formamount;
      }, 0);
      return weeksadd;
    },

    //months
    //put last months dates in array
    lastmonth: function() {
      const lastmonthdateformatted = formatISO(new Date(this.lastmonthdateun), {
        representation: "date",
      });
      console.log(lastmonthdateformatted);
      var months = eachDayOfInterval({
        start: new Date(lastmonthdateformatted),
        end: new Date(this.today),
      });

      this.monthsarray = months.map((dee) => {
        return formatISO(new Date(dee), { representation: "date" });
      });
    },
    //filter last month date and match with expense formdate
    fill: function() {
      this.filteredmonths = this.expenses.filter((expense) => {
        console.log(expense.formdate);
        return this.monthsarray.find((ghi) => {
          return ghi == expense.formdate;
        });
      });
      console.log(this.filteredweeks);
    },
    //add months amount in months
    addmonths: function() {
      const monthsadd = this.filteredmonths.reduce((currenttotal, expense) => {
        return currenttotal + +expense.formamount;
      }, 0);
      return monthsadd;
    },

    //months
  },
};
</script>
<style>
body {
  min-height: 100vh;
  background: linear-gradient(
    to bottom,
    rgba(117, 137, 12, 1) 0%,
    rgba(117, 137, 12, 1) 37%,
    rgba(164, 179, 87, 1) 45%,
    rgba(164, 179, 87, 1) 91%
  );
}
</style>

<style scoped>
.title h1 {
  margin-bottom: 15px;
  text-transform: uppercase;
  font-size: 32px;
}
.home h1 {
  text-align: center;
  margin-top: 20px;
}
.content {
  padding: 10px;
  border-radius: 30px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 15px;
  margin: 15px;
}
.content .card {
  margin: auto;
  margin-bottom: 20px;
  width: 16rem;
  height: 370px;
  padding: 10px;
  border: 1px solid black;
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
  border-radius: 10px;
  background-color: rgb(230, 230, 74);
}
.card-body h1 {
  margin-top: 0px;
  font-size: 2rem;
}
.datepicker {
  text-align: center;
  margin-top: -10px;
}
.datepickerbutton {
  margin-bottom: 10px;
}
.card img {
  border: 1px solid black;
  border-radius: 10px;
  height: 180px;
}
</style>

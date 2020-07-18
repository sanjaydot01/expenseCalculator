<template>
  <div class="home">
    <HelloWorld> </HelloWorld>
    <h1>Add New Expense</h1>
    <div class="container">
      <form action="">
        <label for="example-datepicker">Choose a date</label>
        <b-form-datepicker
          id="example-datepicker"
          v-model="formdate"
          class="mb-2"
        ></b-form-datepicker>
        <p>Value: '{{ formdate }}'</p>
        <label for="">Add Items</label>
        <input v-model="formitem" type="text" />
        <label for="">Add Amount:</label>
        <input type="number" v-model="formamount" />
        <button @click.prevent="display()">Add</button>
      </form>

      <h1>Display Result</h1>
      <h2>Object expenses</h2>
      <li v-for="expense in expenses" v-bind:key="expense">
        {{ expense.formdate }}{{ expense.formitem }}{{ expense.formamount }}
      </li>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      expenses: [{ formdate: "", formitem: "", formamount: "" }],
    };
  },
  methods: {
    display: function() {
      this.expenses.push({
        formdate: this.formdate,
        formitem: this.formitem,
        formamount: this.formamount,
      });
      this.formdate = "";
      this.formitem = "";
      this.formamount = "";
    },
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

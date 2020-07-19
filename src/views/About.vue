<template>
  <div class="about">
    <h1>List of Expenses</h1>

    <h2>Not Orginal</h2>
    <input
      type="text"
      v-model="expenses[index].formdate"
      :class="{ view: !isEditing }"
      v-for="(expense, index) in expenses"
      :disabled="!isEditing"
      :key="index"
    />
    <input
      type="text"
      v-model="expenses[index].formitem"
      :class="{ view: !isEditing }"
      v-for="(expense, index) in expenses"
      :disabled="!isEditing"
      :key="index"
    />

    <input
      type="text"
      v-model="expenses[index].formamount"
      :class="{ view: !isEditing }"
      v-for="(expense, index) in expenses"
      :disabled="!isEditing"
      :key="index"
    />

    <button @click="isEditing = !isEditing" v-if="!isEditing">
      Edit
    </button>
    <button @click="save" v-else-if="isEditing">
      Save
    </button>

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
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      isEditing: false
    };
  },
  computed: {
    ...mapState(["title", "expenses"]),
  },
  methods: {
    save() {
      this.isEditing = !this.isEditing;
    },
    ...mapMutations(["deleteMe", "editMe"]),
  },
};
</script>
<style>
.view {
  border-color: transparent;
  background-color: initial;
  color: initial;
}
</style>

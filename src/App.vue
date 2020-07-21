<template>
  <div id="app">
    <div class="container">
      <div class="topnavbar">
        <h5>sanjay.rayamajhee80@gmail.com</h5>
      </div>

      <nav id="nav">
        <b-navbar toggleable="sm" type="dark" variant="dark">
          <b-navbar-brand href="#">Expenses</b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item to="/">Home</b-nav-item>
              <b-nav-item to="/create"> New Expense</b-nav-item>
              <b-nav-item to="/about">Report</b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
              <b-navbar-nav>
                <b-nav-item href="#">Sign Up</b-nav-item>
                <b-nav-item href="#">Sign In</b-nav-item>
              </b-navbar-nav>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </nav>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {};
</script>
<style>
* {
  padding: 0;
}

.topnavbar {
  display: flex;
  align-items: center;
  min-height: 3vh;
  background-color: rgb(255, 182, 47);
}
.topnavbar h5 {
  font-size: 14px;
  margin: 0 55px;
  justify-content: center;
}
</style>

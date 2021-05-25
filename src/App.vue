<template>
  <div class="app">
    <div>
      <navbar />
    </div>
    <div class="content">
      <div class="left-half">
        <toolbar />
      </div>
      <div class="right-half">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import navbar from './views/navbar/index';
import toolbar from './views/toolbar/index';
export default {
  name: 'App',
  components: {
    navbar,
    toolbar
  },
  mounted() {
    console.log(this.$router);
  }
};
</script>

<style scoped>
.app {
  width: 100%;
  margin: 0;
  padding: 0;
}

.left-half {
  float: left;
  width: 200px;
  height: 100vh;
  border-right: 0.5px solid dimgrey;
}

.right-half {
  margin-left: 200px;
  padding-left: 10px;
  padding-top: 10px;
}
</style>

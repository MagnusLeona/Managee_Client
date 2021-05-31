<template>
  <div class="app">
    <div>
      <navbar />
    </div>
    <div class="content">
      <div>
        <div class="left-half">
          <div class="block"></div>
          <toolbar @updateRouterLink='updateRouterLink'/>
        </div>
        <div class="right-half">
          <div class="block"></div>
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from '../navbar/index';
import toolbar from '../toolbar/index';
export default {
  data() {
    return {
      route: '/magnus/index'
    };
  },
  components: {
    navbar,
    toolbar
  },
  methods: {
    updateRouterLink: function(route) {
      this.$router.push({
        path: route
      });
    } 
  }
};
</script>

<style scoped>
.app {
  width: 100%;
  margin: 0;
  box-sizing: border-box;
  padding: 0;
}

.block {
  width: 100%;
  height: 40px;
}

.content {
  height: 100vh;
  box-sizing: border-box;
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
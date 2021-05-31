<template>
  <div class="toolbar">
    <div
      class="button main-center"
      @click="updateRoute('/main')"
      :class="selected === 'defaultMain' ? 'selected' : 'unselected'"
    >
      Demo测试
    </div>
    <div
      class="button main-center"
      @click="updateRoute('/main/userlist')"
      :class="selected === 'userlist' ? 'selected' : 'unselected'"
    >
      用户信息
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    selected() {
      console.log("SelectedChanged", this.$router.currentRoute.value.name);
      return this.$router.currentRoute.value.name;
    }
  },
  methods: {
    updateRoute: function (route) {
      this.$emit("updateRouterLink", route);
    },

    checkSelected: function (name) {
      console.log(this.$router.currentRoute.value.name);
      return this.$router.currentRoute.value.name === name;
    }
  }
};
</script>

<style scoped>
.toolbar {
  box-sizing: border-box;
}

.button {
  width: 100%;
  height: 60px;
  border-bottom: 1px solid gray;
  box-sizing: border-box;
  padding: 0 10px;
  font-weight: bold;
  transition: all 0.5s ease;
}

.selected {
  color: #fff;
  font-size: 18px;
  background-image: linear-gradient(-46deg, #a4d1ff 0%, #8092df 100%);
  transition: all 0.3s ease;
}

.unselected {
  transition: all 0.3s ease;
  background-color: #fff;
}
</style>

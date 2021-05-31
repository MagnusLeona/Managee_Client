<template>
  <div class="user-card">
    <div>{{User.UserName}}</div>
    <div>{{$utils.getSex(User.UserSex)}}</div>
    <div><a :href="'mailto:' + User.WorkEmail">{{User.WorkEmail}}</a></div>
  </div>
</template>

<script>
export default {
  props: {
    User: Object
  },
  mounted() {
    console.log(this.$utils,'@L');
  }
};
</script>

<style scoped>
.user-card {
  width: 200px;
  height: 100px;
  border: 1px solid purple;
}
</style>
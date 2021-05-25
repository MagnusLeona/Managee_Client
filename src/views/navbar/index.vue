<template>
  <div class="title">
    <div class="blank-block"></div>
    <div class="title-content main-center">这是标题</div>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
.title {
  width: 100%;
  z-index: 10;
  background-color: #fff;
}

.blank-block {
  z-index: 10;
  width: 100%;
  height: 40px;
}

.title-content {
  top:  0;
  z-index: 10;
  width: 100%;
  height: 40px;
  position: fixed;
  padding: 0 10px;
  background-color: #fff;
  border-bottom: 0.5px solid dimgrey;
}
</style>
<template>
  <div>
    <div class="button absolute-center" @click="testApi">
      测试接口
    </div>
    <div>
      <form action="/MagnusServlet/index" method="post">
        <input type="text" name="name" />
        <input type="text" name="value" />
        <input type="submit">
      </form>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    testApi: function() {
      //测试api接口
      new Promise((resolve,reject) => {
        let req = new XMLHttpRequest();
        req.addEventListener('load', () => {
          console.log('Response got! ResponseCode:' + req.status);
          console.log('@ReturnMsg', req.responseText);
          resolve(req.response);
        });
        req.addEventListener('error', () => {
          reject(req.status);
        });
        req.open('POST',  '/managee-server/index');
        req.send("name=magnus");
      }).then(res => {
        console.log('@Result got : ' + res);
        let result = JSON.parse(res);
        console.log(result);
      });
    }
  }
};
</script>

<style scoped>
.button {
  height: 50px;
  width: 200px;
  border-radius: 10px;
  font-size: 24px;
  font-weight: bold;
  border: 3px solid red;
}
</style>
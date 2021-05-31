<template>
  <div>
    <div>
      <input type="text" v-model="UserId" />
      <input type="text" v-model="Password" />
    </div>

    <div class="button" @click="login">Submit</div>

    <div class="button" @click="getData">TestCookie</div>
  </div>
</template>

<script>
import { Login, GetAllUsers } from "@/requests/api/users";

export default {
  data() {
    return {
      UserId: "",
      Password: ""
    };
  },
  methods: {
    login: async function () {
      let t = await Login({
        UserId: this.UserId,
        Password: this.Password
      });
      console.log(t);
    },

    getData: async function () {
      try {
        let userlist = await GetAllUsers({});
        this.UserList = [...userlist];
      } catch (e) {
        console.log("CatchedError", e);
      }
    }
  }
};
</script>

<style scoped>
.button {
  width: 100px;
  height: 60px;
  color: #fff;
  background-color: brown;
}
</style>

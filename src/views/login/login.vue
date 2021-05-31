<template>
  <div class="login absolute-center">
    <LoginInput @commitLogin='commitLogin'/>
  </div>
</template>

<script>
import LoginInput from './components/login-input';

import { Login } from '@/requests/api/users';

export default {
  components: {
    LoginInput
  },
  methods: {
    commitLogin: function(userid, password) {
      console.log(userid, password);
      Login({
        UserId: userid,
        Password: password
      }).then(result => {
        console.log("Result", result);
      });
    }
  }
};
</script>

<style scoped>
.login {
  width: 100%;
  height: 100vh;
}

.login-button {
  
}
</style>
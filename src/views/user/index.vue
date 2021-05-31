<template>
  <div>
    用户主页-UserInfo
    <div>
      {{UserList}}
    </div>

    <usersearh @commitSearch='commitSearch' :DefProps='DefProps'/>

    <usercard v-for="(user,index) in UserList" :key='index' :User='user' />

    <userlogin />
  </div>
</template>

<script>
import usercard from './components/user-card';
import userlogin from './components/user-login';
import usersearh from './components/user-search';

import {GetAllUsers} from '@/requests/api/users';

export default {
  data() {
    return {
      UserList: [],
      DefProps: 'my name is nevermore'
    };
  },
  components: {
    usercard,
    userlogin,
    usersearh
  },
  methods: {
    init: function() {
      GetAllUsers({}).then(res => {
        console.log("@RES", res);
      })["catch"](e => {
        console.log("@Error", e);
      });
    }
  },
  mounted() {
    console.log(this);
    this.init();
    setTimeout(() => {
      this.DefProps = 'my name is highlander';
    }, 1000);
  }
};
</script>

<style scoped>
.button {
  height: 50px;
  width: 200px;
  border-radius: 10px;
  border: 1px solid red;
}
</style>
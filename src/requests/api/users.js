import request from '../request';

const BASE_SERVER_URL = '/managee-server';

const GetAllUsers = function(params) {
  return request(`${BASE_SERVER_URL}/userlist`, {...params});
};

const Login = function(params) {
  return request(`${BASE_SERVER_URL}/userlogin`, {...params});
};

export { GetAllUsers,Login };
import axios from 'axios';

const resolveResponse = function(response) {
  let { data, status } = response;

  if(status !== 200) {
    throw new Error('网络异常！');
  }

  // code 为000表示交易执行成功，直接取返回数据即可
  if(data.code === '000') {
    return data.data;
  } else {
    //自定义抛错
    let e = {
      msg: data.msg,
      code: data.code
    };
    throw e;
  }
};

const post = function(url, params) {
  return axios.post(url, {
    data: {...params},
    headers: {"Content-Type": "application/json"}
  })
    .then(response => resolveResponse(response))
    ["catch"]((e) => {
      throw e;
    });
};

export default function request(url, params) {
  return post(url, params);
};

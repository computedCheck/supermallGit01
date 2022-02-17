import axios from "axios";

export function request1(config) {
  const instance1 = axios.create({
    baseURL:'http://152.136.185.210:7878/api/hy66',
    timeout:5000
  })
  instance1.interceptors.response.use(res => {
    return res
  },error => {
    console.log(error);
  })
//3.发送真正的网络请求
  return instance1(config)
}

export function request2() {

}



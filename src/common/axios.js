
import axios from "axios";

// axios 객체 생성
export default axios.create({
  baseURL: "http://localhost:80",
  headers: {
    "Content-type": "application/json",
  },
  "withCredentials": true,
});
// session ID가 계속 바뀌어서 보낸다. Axios가 보내는 Session ID를 고정으로 만들기 위해 withCredentials 사용  : Axios는 API key로 인증을 하는 곳에 주로 사용하기 때문

// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';


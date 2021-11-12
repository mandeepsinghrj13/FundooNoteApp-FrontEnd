import Axios from "axios";
export const forget = (data) => {
  return Axios.post("http://localhost:8000/forgetPassword", data);
};

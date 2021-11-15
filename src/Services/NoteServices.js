import Axios from "axios";
export const forget = (data) => {
  return Axios.post("http://localhost:8000/forgetPassword", data);
};
class UserNoteServices {
  static resetPassword = (data, token) => {
    console.log("token -> ", token);
    return Axios.post("http://localhost:8000/resetpassword", data, token);
  };
}

export default UserNoteServices;

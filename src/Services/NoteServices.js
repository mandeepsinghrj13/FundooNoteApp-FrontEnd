import Axios from "axios";
export const forget = (data) => {
  return Axios.post("http://localhost:8000/forgetPassword", data);
};
class UserNoteServices {
  static resetPassword = (data, token) => {
    console.log("token -> ", token);
    return Axios.post("http://localhost:8000/resetpassword", data, token);
  };

  static addNote = (data) => {
    const token = localStorage.getItem("token");
    return Axios.post("http://localhost:8000/createnotes", data, {
      headers: { Authorization: `Bearer ${token}` },
    });
  };

  static updateNotes = (data) => {
    const token = localStorage.getItem("token");
    return Axios.put(`http://localhost:8000/updatenotes/${data.id}`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
  };

  static getNotes = () => {
    const token = localStorage.getItem("token");
    return Axios.get("http://localhost:8000/getnotes", {
      headers: { Authorization: `Bearer ${token}` },
    });
  };
  static deleteForever = (data) => {
    const token = localStorage.getItem("token");
    console.log("deleteToken ::", token);
    return Axios.delete(`http://localhost:8000/deletenote/${data.id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  };
}

export default UserNoteServices;

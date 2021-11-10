import Axios from "axios";

Axios.defaults.baseURL = "http://localhost:8000";

export class UserNode {
  register = (userDetails) => {
    return Axios.post("/register", userDetails);
  };

  login = (userCredentials) => {
    console.log(userCredentials);
    return Axios.post("/login", userCredentials);
  };
}

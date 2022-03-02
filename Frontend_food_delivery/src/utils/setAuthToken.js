import api from "./api";
// store our JWT in LS and set axios headers if we do have a token

const setAuthToken = (token, id) => {
  if (token) {
    api.defaults.headers.common["Bearer"] = token;
    localStorage.setItem("token", token);
    localStorage.setItem("userId", id);
  } else {
    delete api.defaults.headers.common["Bearer"];
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
  }
};

export default setAuthToken;

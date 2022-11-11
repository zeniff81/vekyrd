import axios from "axios";
import { SERVER_URL } from "../../environments";

export const loadUser = async (whoAmI, fetchCart) => {
  if (localStorage.getItem("authToken") === null) return;

  try {
    const response = await axios.get(`${SERVER_URL}/api/auth/whoami`);
    const username = response.data.username;
    const roles = response.data.role;
    const _id = response.data._id;

    console.log(`response.data`, response.data);

    whoAmI({ username, roles, _id });
    fetchCart(_id);
  } catch (error) {
    console.log("App: ", error);
  }
};

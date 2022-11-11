import axios from "axios";
import { SERVER_URL } from "../../environments";

export const handleLocalStorageItemsToServer = async currentId => {
  console.log(`handleLocalStorageItemsToServer`);
  const items = window.localStorage.getItem("items");
  console.log(`items`, items);

  // localStorage.removeItem("authToken");
  // localStorage.removeItem("items");

  // try {
  //   const response = await axios.post(
  //     `${SERVER_URL}/api/auth/savelocalstorageitems`,
  //     {
  //       _id: currentId,
  //       items
  //     }
  //   );
  //   console.log(response.data);
  // } catch (error) {
  //   console.log(error);
  // }
};

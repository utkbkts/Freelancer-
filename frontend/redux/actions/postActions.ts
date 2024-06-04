import axios from "axios";
import { Props } from "../../src/components/contactPage/Contact";
import toast from "react-hot-toast";
export const createPostsActions = (form: Props) => async (dispatch: any) => {
  try {
    const { data } = await axios.post(
      `${import.meta.env.VITE_PORT}/api/v2/send`,
      form
    );
    dispatch({ type: "CREATE_SEND", payload: data });
    toast.success("Message sent successfully");
  } catch (error: any) {
    console.log(error.response.data.message);
    toast.error(error.response.data.message);
  }
};

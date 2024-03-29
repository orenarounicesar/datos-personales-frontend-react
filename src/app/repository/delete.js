import axios from "axios";

const apiUrl = import.meta.env.VITE_API2;

export const borrar = async (id) => {
  try {
    const resp = await axios.delete(apiUrl + "/" + id);
    return resp;
  } catch (e) {
    return e;
  }
};

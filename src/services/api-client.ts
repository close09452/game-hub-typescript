import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "788f2fee12f643528a8349b8a11644b7",
  },
});

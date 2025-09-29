import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "aa4325992da540e28eff79d8ef056377",
  },
});

import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "fc03425806e943159b8ca09fd79b99e5",
  },
});

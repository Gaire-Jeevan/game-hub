import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f28c544cf92c4024b8affd04ad1f98d4",
  },
});

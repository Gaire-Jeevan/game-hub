import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "8b26c025472245efbd4d36dae215dd10",
  },
});

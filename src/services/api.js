import axios from "axios";

let baseUrl = "https://uniontracking-3.frogi.dev/api/";

export default axios.create({
  baseUrl,
});

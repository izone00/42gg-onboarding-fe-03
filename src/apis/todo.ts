import axios from "axios";

export function getTodos() {
  return axios.get("http://localhost:3000/api/todos").then((res) => res.data);
}

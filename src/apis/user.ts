import { User } from "@/types/User";
import axios from "axios";

export async function getUsersReq(): Promise<User[]> {
  return axios.get("http://localhost:3000/api/users").then((res) => res.data);
}

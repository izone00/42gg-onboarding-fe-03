import { User } from "@/types/User";
import axios from "axios";

export async function LoginRequest({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<User> {
  return axios
    .post("http://localhost:3000/api/login", {
      email,
      password,
    })
    .then((res) => res.data);
}

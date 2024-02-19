import { useEffect, useState } from "react";
import { getUsersReq } from "../apis/user";
import { User } from "@/types/User";

export function useUsers() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getUsersReq()
      .then((data) => {
        setUsers(data);
      })
      .catch(() => {
        // console.log("users fetch err");
      });
  }, []);

  return { users };
}

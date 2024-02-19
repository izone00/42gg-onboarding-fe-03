import { User } from "@/types/User";
import { HttpResponse, http } from "msw";

const users: User[] = [
  {
    id: 1,
    email: "user1@user1.com",
    username: "유저1",
    password: "qwer",
    role: "normal",
  },
  {
    id: 2,
    email: "user2@user2.com",
    username: "유저2",
    password: "qwer",
    role: "manager",
  },
  {
    id: 3,
    email: "user3@user3.com",
    username: "유저3",
    password: "qwer",
    role: "admin",
  },
];

const todos: string[] = ["안녕", "투두", "리스트"];

export const handlers = [
  http.post("/api/login", async ({ request }): Promise<HttpResponse> => {
    const { email, password } = (await request.json()) as {
      email: string;
      password: string;
    };

    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    return user
      ? HttpResponse.json(user, { status: 200 })
      : new HttpResponse(null, { status: 401 });
  }),
  http.get("/api/users", async () => {
    return HttpResponse.json(users, { status: 200 });
  }),
  http.get("/api/todos", async () => {
    return HttpResponse.json(todos, { status: 200 });
  }),
];

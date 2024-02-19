"use client";

import { useRecoilState } from "recoil";
import styles from "./styles.module.scss";
import { userState } from "@/atoms/auth";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect } from "react";
import axios from "axios";
import { getTodos } from "@/apis/todo";
import { todo } from "node:test";

export default function MainPage() {
  const [user] = useRecoilState(userState);
  const router = useRouter();
  const todos: string[] = [];

  // useEffect(() => {
  //   user ?? router.push("/login");
  // }, [user, router]);

  useEffect(() => {
    getTodos().then((data) => console.log(data));
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
  }

  return (
    <div className={styles.todoCon}>
      <main>
        <ul>
          <li>
            <input type="checkbox" />
            <p>내용</p>
            <button>수정</button>
            <button>삭제</button>
          </li>
        </ul>
        <form className={styles.todoCreate}>
          <textarea rows={5}></textarea>
          <button type="submit">추가</button>
        </form>
      </main>
    </div>
  );
}

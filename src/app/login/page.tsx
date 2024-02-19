"use client";

import { useEffect } from "react";
import { useLoginForm } from "./hook";
import styles from "./styles.module.scss";
import { useRouter } from "next/navigation";
import { useRecoilState } from "recoil";
import { userState } from "@/atoms/auth";

export default function Login() {
  const {
    email,
    password,
    handleSubmit,
    handleEmailChange,
    handlePasswordChange,
  } = useLoginForm();
  const [user] = useRecoilState(userState);
  const router = useRouter();

  useEffect(() => {
    user && router.push("/");
  }, [user, router]);

  return (
    <div className={styles.loginCon}>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputBox}>
          <label htmlFor="EmailLoginInput">아이디</label>
          <input
            type="email"
            id="EmailLoginInput"
            value={email}
            onChange={handleEmailChange}
          />
          <label htmlFor="passwordInput">비밀번호</label>
          <input
            type="password"
            name=""
            id="passwordInput"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className={styles.submitBtnBox}>
          <button type="submit">로그인</button>
        </div>
      </form>
    </div>
  );
}

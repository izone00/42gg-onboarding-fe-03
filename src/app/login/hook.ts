"use client";

import { useState } from "react";
import { LoginRequest } from "@/apis/login";
import { useRecoilState } from "recoil";
import { userState } from "@/atoms/auth";

export function useLoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [, setUser] = useRecoilState(userState);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    return LoginRequest({ email, password })
      .then((user) => {
        setUser(user);
      })
      .catch(() => {
        // console.log(e);
      });
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return {
    email,
    password,
    handleSubmit,
    handleEmailChange,
    handlePasswordChange,
  };
}

import React from "react";
import { RecoilRoot } from "recoil";

export default function RecoilRootWraper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RecoilRoot>{children}</RecoilRoot>;
}

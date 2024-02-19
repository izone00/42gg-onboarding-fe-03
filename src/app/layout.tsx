"use client";

import Link from "next/link";
import styles from "./styles.module.scss";
import { RecoilRoot } from "recoil";
import AuthProvider from "./AuthProvider";
import { useEffect, useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMocking, setIsMocking] = useState(false);

  useEffect(() => {
    async function enableMocking() {
      const { worker } = await import("@/mocks/browser");
      return worker.start();
    }
    enableMocking()
      .then(() => setIsMocking(true))
      .catch((e) => console.log(e));
  }, []);

  return (
    <html>
      <body>
        <div className={styles.siteCon}>
          <div className={styles.viewBox}>
            <header className={styles.siteHeader}>
              <Link href={"/"}>
                <h1>42GG</h1>
              </Link>
            </header>
            {isMocking ? (
              <RecoilRoot>
                <AuthProvider>{children}</AuthProvider>
              </RecoilRoot>
            ) : (
              "isMocking..."
            )}
          </div>
        </div>
      </body>
    </html>
  );
}

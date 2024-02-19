"use client";
import { useRecoilState } from "recoil";
import { userState } from "@/atoms/auth";
import styles from "@/app/styles.module.scss";
import Link from "next/link";
import { useUsers } from "./hook";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user] = useRecoilState(userState);
  const { users } = useUsers();

  return (
    <div>
      {user ? (
        <>
          <nav className={styles.siteNav}>
            {(user?.role === "manager" || user?.role === "admin") && (
              <Link href={"/manager"}>
                <button>manager</button>
              </Link>
            )}
            {user?.role === "admin" && (
              <Link href={"/admin"}>
                <button>admin</button>
              </Link>
            )}
          </nav>
          <div className={styles.siteBodyCon}>
            <aside>
              <ul className={styles.userListCon}>
                {users.map((u) => (
                  <li key={u.id}>{u.username}</li>
                ))}
              </ul>
            </aside>
            <main className={styles.siteMainCon}>{children}</main>
          </div>
        </>
      ) : (
        children
      )}
    </div>
  );
}

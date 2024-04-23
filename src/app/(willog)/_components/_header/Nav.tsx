"use client";
import React from "react";
import { Menu } from "../../_model/menu";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import styles from "../../_styles/header.module.scss";
import { nav_menu } from "./constants";

const Nav: () => React.JSX.Element | null = () => {
  const get_path: string | null = useSearchParams().get("path");
  const current_path: string = usePathname();

  return current_path === "/" ? (
    <nav className={styles.nav_wrap}>
      <ul>
        {nav_menu.map((menu: Menu) => (
          <li
            key={menu.id}
            className={get_path === menu.pathname ? styles.active : undefined}
          >
            <Link href={menu.path}>{menu.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  ) : null;
};

export default Nav;

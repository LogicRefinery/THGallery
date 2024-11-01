"use client";
import React, { useEffect, useRef, useState } from "react";
import { Menu } from "../../_model/menu";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import styles from "../../_styles/header.module.scss";
import { nav_menu } from "./constants";

const Nav = ({
  isMobile,
  isOpen,
  toggleMenu,
}: {
  isMobile: boolean;
  isOpen: boolean;
  toggleMenu: () => void;
}) => {
  const get_path = useSearchParams().get("path");
  const current_path = usePathname();

  return current_path === "/" ? (
    <nav className={styles.nav_wrap}>
      <>
        {isMobile && (
          <div onClick={toggleMenu} className={styles.bugger_wrap}>
            <div
              className={`${
                isOpen ? styles["open_bugger_top"] : styles["close_bugger_top"]
              } ${styles.bugger_top}`}
            ></div>
            <div
              className={`${
                isOpen
                  ? styles["open_bugger_middle"]
                  : styles["close_bugger_middle"]
              } ${styles.bugger_middle}`}
            ></div>
            <div
              className={`${
                isOpen
                  ? styles["open_bugger_bottom"]
                  : styles["close_bugger_bottom"]
              } ${styles.bugger_bottom}`}
            ></div>
          </div>
        )}

        <ul className={`${isOpen && styles["fade_in"]} `}>
          {isOpen &&
            nav_menu.map((menu: Menu) => (
              <li
                key={menu.id}
                className={
                  get_path === menu.pathname ? styles.active : undefined
                }
              >
                <Link href={menu.path}>{menu.name}</Link>
              </li>
            ))}
        </ul>
      </>
    </nav>
  ) : null;
};

export default Nav;

import Link from "next/link";
import React from "react";
import styles from "../../_styles/header.module.scss";
import { BsBookmarkHeart } from "react-icons/bs";

const TopMenu = ({ isMobile }: { isMobile: boolean }) => {
  return (
    <div className={styles.top_menu_wrap}>
      <ul className={styles.top_menu_action}>
        <li>
          <Link href="/bookmark">
            <BsBookmarkHeart size={38} aria-label="bookmark" />
          </Link>
        </li>
      </ul>
      {!isMobile && (
        <ul className={styles.top_menu_user_info}>
          <li>Kim</li>
          <li>Kim@gmail.com</li>
        </ul>
      )}
    </div>
  );
};

export default TopMenu;

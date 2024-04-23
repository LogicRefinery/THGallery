import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../../_styles/header.module.scss";

const TopMenu: () => React.JSX.Element = () => {
  return (
    <div className={styles.top_menu_wrap}>
      <ul className={styles.top_menu_action}>
        <li>
          <form action="#">
            <fieldset className={styles.fieldset}>
              <legend className="blind">사진제출 버튼</legend>
              <input type="submit" value="사진 제출" />
            </fieldset>
          </form>
        </li>
        <li>
          <Link href="/bookmark">
            북마크
            <Image
              src={"/like_icon.svg"}
              alt={"하트 이미지"}
              width={13}
              height={13}
            ></Image>
          </Link>
        </li>
      </ul>
      <ul className={styles.top_menu_user_info}>
        <li>Evie</li>
        <li>evie@willog.io</li>
      </ul>
    </div>
  );
};

export default TopMenu;

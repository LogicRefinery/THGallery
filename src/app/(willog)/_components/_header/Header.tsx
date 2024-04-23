import React, { Suspense } from "react";
import Nav from "./Nav";
import TopMenu from "./TopMenu";
import Link from "next/link";
import Image from "next/image";
import styles from "../../_styles/header.module.scss";

const Header: () => React.JSX.Element = () => {
  return (
    <header id={styles.header}>
      <div className={styles.header_wrap}>
        <div className={styles.logo_wrap}>
          <h1>
            <Link href="/">
              <Image
                src="/logo_black.png"
                alt="willog"
                width={103}
                height={30}
              ></Image>
            </Link>
          </h1>
        </div>
        <Suspense fallback={<div>...loading</div>}>
          <Nav />
        </Suspense>
        <TopMenu />
      </div>
    </header>
  );
};

export default Header;

"use client";
import React, { Suspense, useEffect, useRef, useState } from "react";
import Nav from "./Nav";
import TopMenu from "./TopMenu";
import Link from "next/link";
import styles from "../../_styles/header.module.scss";

const Header: () => React.JSX.Element = () => {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768);
  const [isOpen, setIsOpen] = useState<boolean>(window.innerWidth > 768);
  const mobile_menu_open_state = useRef<boolean>(false);

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
      // 메뉴가 수동으로 열렸을 때는 닫히지 않게 유지
      if (!mobile_menu_open_state.current) {
        setIsOpen(false);
      }
    } else {
      // PC로 전환될 때 항상 메뉴를 열고, 플래그를 초기화
      setIsMobile(false);
      setIsOpen(true);
      mobile_menu_open_state.current = false;
    }
  };

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
    // 메뉴가 수동으로 열렸거나 닫혔음을 표시
    mobile_menu_open_state.current = true;
  };

  useEffect(() => {
    // 초기 설정
    if (window.innerWidth <= 768) {
      setIsMobile(true);
      setIsOpen(false);
    } else {
      setIsMobile(false);
      setIsOpen(true);
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header id={styles.header}>
      <div className={styles.header_wrap}>
        <div className={styles.logo_wrap}>
          <h1>
            <Link href="/">ThGallery</Link>
          </h1>
        </div>
        <Suspense fallback={<div>...loading</div>}>
          <Nav isMobile={isMobile} isOpen={isOpen} toggleMenu={toggleMenu} />
        </Suspense>
        <TopMenu isMobile={isMobile} />
      </div>
    </header>
  );
};

export default Header;

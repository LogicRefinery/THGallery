"use client";
import React, { useEffect, useRef, useState } from "react";
import Nav from "./Nav";
import TopMenu from "./TopMenu";
import Link from "next/link";
import styles from "../../_styles/header.module.scss";

const Header: () => React.JSX.Element = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const mobile_menu_open_state = useRef<boolean>(false);

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
      if (!mobile_menu_open_state.current) {
        setIsOpen(false);
      }
    } else {
      setIsMobile(false);
      setIsOpen(true);
      mobile_menu_open_state.current = false;
    }
  };

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
    mobile_menu_open_state.current = true;
  };

  useEffect(() => {
    // 클라이언트 사이드에서만 실행
    setIsMobile(window.innerWidth <= 768);
    setIsOpen(window.innerWidth > 768);

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
        <Nav isMobile={isMobile} isOpen={isOpen} toggleMenu={toggleMenu} />
        <TopMenu isMobile={isMobile} />
      </div>
    </header>
  );
};

export default Header;

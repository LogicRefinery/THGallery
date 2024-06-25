"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "../../../_styles/modal.module.scss";
import { Photo, PhotoResponse } from "../../_model/photos";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faX } from "@fortawesome/free-solid-svg-icons";
import useHeartToggle from "../../_hooks/useHeartToggle";

const Modal = ({ onClose, image }: { onClose: () => void; image: Photo }) => {
  const { heart, toggle } = useHeartToggle(image);

  return (
    <div className={styles.modal_wrap}>
      <div className={styles.image_area}>
        <Image
          className={styles.image}
          src={image.urls.regular}
          alt={image.alt_description}
          fill
          sizes="(min-width: 60em) 24vw,
          (min-width: 28em) 45vw,
          100vw"
          priority={true}
        />
      </div>
      <div className={styles.description_area}>
        {image.alt_description ? <p>제목 : {image.alt_description}</p> : ""}
        {image.description ? <p>설명 : {image.description}</p> : ""}

        <p>작가 : {image.user.first_name}</p>
        {image.user.instagram_username ? (
          <p>
            instagram :
            <Link
              href={`https://www.instagram.com/${image.user.instagram_username}/`}
            >
              {image.user.instagram_username}
            </Link>
          </p>
        ) : (
          ""
        )}
        <p>likes : {image.likes}</p>
      </div>

      <div className={styles.btn_area}>
        <button className={styles.like_btn} onClick={toggle}>
          <FontAwesomeIcon
            icon={faHeart}
            id={heart ? styles.like : styles.unlike}
          />
        </button>
        <button onClick={onClose} className={styles.close_btn}>
          <FontAwesomeIcon icon={faX} className={styles.close_icon} />
        </button>
      </div>
    </div>
  );
};

export default Modal;

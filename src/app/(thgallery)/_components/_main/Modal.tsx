"use client";
import React, { useEffect } from "react";
import styles from "../../../_styles/modal.module.scss";
import { Photo } from "../../_model/photos";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faX } from "@fortawesome/free-solid-svg-icons";
import useHeartToggle from "../../_hooks/useHeartToggle";

const Modal = ({
  onClose,
  image,
  updateStorageData,
}: {
  onClose: () => void;
  image: Photo;
  updateStorageData?: (id: string) => void;
}) => {
  const { heart, toggle } = useHeartToggle(image, updateStorageData);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <>
      <div className={styles.modal_overay} onClick={onClose}></div>
      <div className={styles.modal_wrap}>
        <div className={styles.image_area}>
          <Image
            className={styles.image}
            src={image.urls.regular}
            alt={image.alt_description}
            fill
            sizes="(max-width: 768px) 100vw,
          (max-width: 1280px) 80vw,
          50vw"
            priority={true}
          />
        </div>
        <div className={styles.description_area}>
          <ul>
            {image.alt_description && (
              <li>
                <span>제목:</span> {image.alt_description}
              </li>
            )}
            {image.description && (
              <li>
                <span>설명:</span> {image.description}
              </li>
            )}
            {image.user.first_name && (
              <li>
                <span>작가:</span> image.user.first_name
              </li>
            )}
            {image.user.instagram_username && (
              <li>
                <span>인스타그램:</span>{" "}
                <Link
                  href={`https://www.instagram.com/${image.user.instagram_username}/`}
                >
                  {image.user.instagram_username}
                </Link>
              </li>
            )}
            {image.likes && (
              <li>
                <span>좋아요:</span> {image.likes}
              </li>
            )}
          </ul>
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
    </>
  );
};

export default Modal;

"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "../../../_styles/modal.module.scss";
import { Photo, PhotoResponse } from "../../_model/photos";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faX } from "@fortawesome/free-solid-svg-icons";
import useHeartToggle from "../../_hooks/useHeartToggle";

/*
  좋아요버튼의 두 가지 상황
  1. 모달창 오픈 : 모달창 열었을 때 좋아요 상태를 확인하고 그에 맞는 클래스명을 삽입한다.
  2. 좋아요 버튼 클릭 : 좋아요 상태를 변경한다.
*/

/*
타입스크립트 타입정의는 어디어디 해야되나요 ?

함수 : 매개변수 , 반환은 추론으로 보통 감
객채 : 속성
배열 : 요소
변수 : 

props,
state, 제네릭사용

*/

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

"use client";
import React, { useEffect, useState } from "react";
import styles from "./styles/bookmark.module.scss";
import { getStorage } from "@/app/_utill/utills";
import Image from "next/image";
import ImagesRender from "../_components/_main/ImagesRender";
import { Photo, PhotoResponse } from "../_model/photos";
import { createPortal } from "react-dom";
import Modal from "../_components/_main/Modal";

/*
  1. 로컬스토리지에 내가 저장해둔 모든 이미지를 가져온다.
  2. 다른 데이터가 있을 수 있으니, key값과 value.id 가 같은것만 가져오면 될듯.

  가져오는 방법
  1. 로컬스토리지 객체에 모든 키 값을 취득한다. Object.keys 사용하면 모든 키값을 배열로 반환해줌
  2. 
  
*/

const Page = () => {
  //이건 모르겠다.. 근데 아마 이건 이것일것이다. 라는 뜻
  //타입체커 : 이거 아닌거같은데? 하면 as 키워드도 안먹힘
  /*
  array.reduce((acc,key)=>{})
  첫번째 인자 acc : 연산한 결과값이 모이는 변수
  두번째 인자 any : 배열의 요소의 값
  콜백함수에서 뭔짓거리를해서 acc 에 연산한 값 모아서 리턴 가능
  */
  const [modalState, setModalState] = useState<boolean>(false);
  const [imageInfo, setImageInfo] = useState<Photo>();
  const [storageData, setStorageData] = useState<Photo[]>();

  console.log("modalState", modalState);
  console.log("imageInfo", imageInfo);
  console.log("storageData", storageData);

  // 문제 : 최초 마운트 될때만 스토리지데이터의 상태를 업데이트하기 때문에,
  const storage = Object.keys(global?.window?.localStorage) as unknown as Array<
    keyof Record<string, PhotoResponse>
  >;

  const Data = storage.reduce((acc: Photo[], key) => {
    const item = getStorage(key) as unknown as Photo;
    if (item && key.length <= 11) acc.push(item);
    return acc;
  }, []);

  useEffect(() => {
    setStorageData(Data);
  }, []);

  return (
    <div>
      <section className={styles.bookmark_wrap}>
        <div className={styles.title_area}>
          <h2>내가 좋아하는 이미지</h2>
        </div>
        <div className={styles.image_area}>
          <ul>
            {storageData?.map((image) => {
              if (!image) return;
              return (
                <li
                  key={image.id}
                  onClick={() => {
                    setImageInfo(image);
                    setModalState(true);
                  }}
                >
                  <Image
                    src={image.urls.small}
                    alt={image.alt_description}
                    fill={true}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    placeholder="blur"
                    blurDataURL={
                      "data:image/svg+xml;base64,Cjxzdmcgd2lkdGg9IjcwMCIgaGVpZ2h0PSI0NzUiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImciPgogICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMzMzIiBvZmZzZXQ9IjIwJSIgLz4KICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzIyMiIgb2Zmc2V0PSI1MCUiIC8+CiAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMzMzMiIG9mZnNldD0iNzAlIiAvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjcwMCIgaGVpZ2h0PSI0NzUiIGZpbGw9IiMzMzMiIC8+CiAgPHJlY3QgaWQ9InIiIHdpZHRoPSI3MDAiIGhlaWdodD0iNDc1IiBmaWxsPSJ1cmwoI2cpIiAvPgogIDxhbmltYXRlIHhsaW5rOmhyZWY9IiNyIiBhdHRyaWJ1dGVOYW1lPSJ4IiBmcm9tPSItNzAwIiB0bz0iNzAwIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgIC8+Cjwvc3ZnPg=="
                    }
                  />
                </li>
              );
            })}
          </ul>
          {modalState &&
            imageInfo &&
            createPortal(
              <Modal
                onClose={() => {
                  setModalState(false);
                }}
                image={imageInfo}
              />,
              document.body
            )}
        </div>
      </section>
    </div>
  );
};

export default Page;

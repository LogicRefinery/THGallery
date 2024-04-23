"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { Photo, PhotoResponse } from "../../_model/photos";
import { createPortal } from "react-dom";
import Modal from "./Modal";

const ImagesRender = ({ images }: { images: PhotoResponse }) => {
  const [modalState, setModalState] = useState<boolean>(false);
  const [imageInfo, setImageInfo] = useState<Photo>();

  return (
    <>
      {images.results.length !== 0 ? (
        images.results.map((image: Photo) => {
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
        })
      ) : (
        <div>검색된 이미지가 없습니다.</div>
      )}

      {/*
      모달 컴포넌트
      
      1. 기본 모달의 상태 : 비활성화
      2. 각 이미지를 클릭하면 모달 컴포넌트 활성화
      3. 모달 컴포넌트에게 줄 props = 모달의 상태를 바꿀 함수, 이미지 정보

      createPotal(children, DomNode)

      1.첫번째 인자 : 포탈을 태울 모든 리액트 자원
      2.두번째 인자 : 포탈에 태운 자원을 렌더링 할 DOM Node
      
      주의사항 : 포탈의 이벤트는 DOM 트리가 아닌 React 트리에 따라 전파 됩니다.

      */}
      {modalState &&
        createPortal(
          <Modal
            onClose={() => {
              setModalState(false);
            }}
            image={imageInfo as Photo}
          />,
          document.body
        )}
    </>
  );
};

export default ImagesRender;

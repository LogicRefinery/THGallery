"use client";
import React, { useEffect, useState } from "react";
import { getStorage, setStorage } from "@/app/_utill/utills";
import { Photo } from "../_model/photos";

const useHeartToggle = (
  image: Photo,
  updateStorageData?: (id: string) => void
) => {
  const [heart, setHeart] = useState<boolean>(false);

  useEffect(() => {
    const storage = getStorage(image.id);
    const hasImage = storage.id === image.id;
    hasImage ? setHeart(true) : null;
  }, [image]);

  const toggle = () => {
    if (heart) {
      localStorage.removeItem(image.id);
      setHeart(false);
      if (updateStorageData) {
        updateStorageData(image.id); // 함수가 있으면 호출
      }
    } else {
      setStorage(image.id, image);
      setHeart(true);
    }
  };
  return { heart, toggle };
};

export default useHeartToggle;

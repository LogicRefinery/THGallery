import { Photo, PhotoResponse } from "./../(willog)/_model/photos";
export function getStorage(imageId: string): Photo {
  const storageData = window?.localStorage?.getItem(imageId);
  const parseData = storageData ? JSON.parse(storageData) : {};
  return parseData.id ? parseData : delete parseData[imageId];
}
export function setStorage(imageId: string, imageData: Photo) {
  localStorage.setItem(imageId, JSON.stringify(imageData));
}

//Record 객체의 속성이 뭐뭐 있는지 모를 때 사용한다 자세한것 알아보도록

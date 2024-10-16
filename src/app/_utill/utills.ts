import { Photo, PhotoResponse } from "../(thgallery)/_model/photos";
export function getStorage(imageId: string): Photo {
  const storageData = window?.localStorage?.getItem(imageId);
  const parseData = storageData ? JSON.parse(storageData) : {};
  return parseData.id ? parseData : delete parseData[imageId];
}
export function setStorage(imageId: string, imageData: Photo) {
  localStorage.setItem(imageId, JSON.stringify(imageData));
}

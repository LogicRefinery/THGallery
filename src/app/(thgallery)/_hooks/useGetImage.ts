import { PhotoResponse } from "../_model/photos";
import { SearchParams } from "../_model/searchParams";

type Option = {
  searchParams: SearchParams;
  page: number;
  per_page: number;
};

type CacheList = {
  [key: string]: {
    pages: {
      [pageNumber: number]: PhotoResponse;
    };
  };
};

const cacheList: CacheList = {};

const useGetImage = async ({ searchParams, page, per_page }: Option) => {
  const searchWord = searchParams.path || "random";
  const pageNumber = page;
  const hasWord = cacheList.hasOwnProperty(searchWord);

  const requestFunction = async () => {
    const res: Response = await fetch(
      `https://api.unsplash.com/search/photos?query=${searchWord}&client_id=ad8wmdT33loR6FrMfafHvyt6ZtRYhxd5wBivponnLpM&page=${pageNumber}&per_page=${per_page}`,
      {
        method: "GET",
        // cache: "no-store",
      }
    );
    if (!res.ok) {
      throw new Error("사진 데이터를 가져오지 못했습니다.");
    }
    const data: PhotoResponse = await res.json();
    return data;
  };

  const cacheChecker = async () => {
    if (hasWord && searchWord) {
      const pageData = cacheList[searchWord].pages[pageNumber];
      if (pageData) {
        return pageData;
      } else {
        const value = await requestFunction();
        cacheList[searchWord].pages[pageNumber] = value;
        setTimeout(() => {
          delete cacheList[searchWord].pages[pageNumber];
        }, 10000);
        return value;
      }
    } else {
      if (searchWord) {
        const value = await requestFunction();
        cacheList[searchWord] = { pages: {} };
        cacheList[searchWord].pages[pageNumber] = value;
        setTimeout(() => {
          delete cacheList[searchWord].pages[pageNumber];
        }, 10000);
        return value;
      }
    }
  };
  return cacheChecker();
};
export default useGetImage;

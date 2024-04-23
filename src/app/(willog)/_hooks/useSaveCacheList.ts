"use client";
import React, { useState } from "react";

type CacheItem = {
  word: string;
  pages: Page[];
};

type Page = {
  number: number;
  maxAge: number;
  cachingTime: number;
};

const useSaveCacheList = () => {
  const initialState: CacheItem[] = [
    {
      word: "cat",
      pages: [
        {
          number: 1,
          maxAge: 3600,
          cachingTime: Math.floor(new Date().getTime() / 1000),
        },
        {
          number: 2,
          maxAge: 3600,
          cachingTime: Math.floor(new Date().getTime() / 1000),
        },
      ],
    },
  ];

  /*
  요청하기전에 여기서 로직 처리하는게 맞는지?
  만약 여기가 아니라면 패치문이 있는곳에서 해야되는데. 그건 useGetImage 인데 거기서 이 컴포넌트를 호출하면 커스텀훅간에 의존성이 커져서 나중에 재사용한다거나 할 떄 좀 구리지 않을지..
  */

  const [cacheList, setCacheList] = useState(initialState);

  return { cacheList, setCacheList };
};
export default useSaveCacheList;

/* 
type CacheAction =
  | { type: "ADD_CACHE"; payload: CacheItem }
  | { type: "UPDATE_CACHE"; payload: CacheItem }
  | { type: "DELETE_CACHES" };


함수 실행되명 리스트에 추가하기
const initialState: CacheItem[] = [
  {
    word: "cat",
    pages: [
      {
        number: 1,
        maxAge: 3600,
        cachingTime: Math.floor(new Date().getTime() / 1000),
      },
      {
        number: 2,
        maxAge: 3600,
        cachingTime: Math.floor(new Date().getTime() / 1000),
      },
    ],
  },
];

const reducers = (state: CacheItem[], action: CacheAction): CacheItem[] => {
  switch (action.type) {
    case "ADD_CACHE":
      
        1. 단어와 페이지를 모두 추가한다.
        2. 단어가 있다면 페이지만 추가한다.
      
    // 단어가 있어? -> 

      return [...state, action.payload];
    case "UPDATE_CACHE":
      return [
        ...state,

        //여기 객체 넣어야됨
        //스테이트를 순회한다. -> word.word 가 있는지 확인 -> pages.number 가 있는지 확인 -> 있다면 처음 작성된 시간에서 maxAge만큼 지났는지 확인 -> 지났다면 새로 요청, 안지났다면 캐쉬값 사용
      ];
    case "DELETE_CACHES":
      return state;
    default:
      return state;
  }
};

const [cacheList, dispatch] = useReducer(reducers, initialState);
*/

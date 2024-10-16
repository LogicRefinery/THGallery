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

  const [cacheList, setCacheList] = useState(initialState);

  return { cacheList, setCacheList };
};
export default useSaveCacheList;

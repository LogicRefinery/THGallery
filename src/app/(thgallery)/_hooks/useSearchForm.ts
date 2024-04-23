"use client";
import React, { useEffect, useState } from "react";

const useSearchForm = () => {
  const [keyword, setKeyword] = useState<string>("");
  const update = (keyword: string) => setKeyword(keyword);
  const reset = () => {
    setKeyword("");
  };

  return {
    keyword,
    update,
    reset,
  };
};

export default useSearchForm;

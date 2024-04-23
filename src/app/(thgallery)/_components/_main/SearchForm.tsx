"use client";
import React from "react";
import styles from "../../_styles/main.module.scss";
import useSearchForm from "../../_hooks/useSearchForm";
import { PhotoResponse } from "../../_model/photos";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const SearchForm: () => React.JSX.Element = () => {
  const { keyword, update, reset } = useSearchForm();
  const router = useRouter();
  const domainName = usePathname();
  const searchParams = useSearchParams();

  const searchRoute = (name: string, value: string | undefined) => {
    const param = new URLSearchParams(searchParams.toString());
    value ? param.set(name, value) : null;
    param.set("page", "1");
    return param.toString();
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          router.push(domainName + "?" + searchRoute("path", keyword));
          reset();
        }}
      >
        <fieldset className={styles.search_fieldset}>
          <legend className="blind">검색영역</legend>
          <label htmlFor={styles.search} className="blind">
            검색어
          </label>
          <input
            type="text"
            name="search"
            id={styles.search}
            required
            placeholder="고해상도 이미지 검색"
            onChange={(e) => {
              update(e.target.value);
            }}
          />
          <input type="submit" value="검색" id={styles.search_submit} />
        </fieldset>
      </form>
    </>
  );
};

export default SearchForm;

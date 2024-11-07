import React from "react";
import useGetImage from "../../_hooks/useGetImage";
import styles from "../../_styles/main.module.scss";
import { Photo, PhotoResponse } from "../../_model/photos";
import PageNation from "./PageNation";
import ImagesRender from "./ImagesRender";
import { SearchParams } from "../../_model/searchParams";

type Option = {
  searchParams: SearchParams;
  page: number;
  per_page: number;
};

const Images = async ({ searchParams }: { searchParams: SearchParams }) => {
  const option: Option = {
    searchParams,
    page: +searchParams.page!,
    per_page: 16,
  };

  const images: PhotoResponse | undefined = await useGetImage(option);
  const isSearchParams = Object.keys(searchParams).length;

  return (
    <section className={styles.images_section}>
      <div className={styles.images_wrap}>
        <div className={styles.images}>
          <ul>{images && <ImagesRender images={images} />}</ul>
        </div>
        {isSearchParams && images && (
          <PageNation option={option} images={images} />
        )}
      </div>
    </section>
  );
};

export default Images;

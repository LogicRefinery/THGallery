"use client";
import React from "react";
import { Photo, PhotoResponse } from "../../_model/photos";
import Link from "next/link";
import styles from "../../_styles/main.module.scss";
import { useRouter } from "next/navigation";
import { SearchParams } from "../../_model/searchParams";

type Option = {
  searchParams: SearchParams;
  page: number;
  per_page: number;
};
/*
이 컴포넌트가 해야될 일

1. 페이지네이션 구현
2. 페이지네이션 버튼 클릭하면 이미지 요청하고 페이지 변경
*/

const PageNation = ({
  option,
  images,
}: {
  option: Option;
  images: Record<string, unknown> | PhotoResponse;
}) => {
  const btnPerPage = 5; //한 페이지에 보여주고자 하는 페이지 버튼 갯수
  const contentsPerPage = option.per_page; //한 페이지에 보여주고자 하는 컨텐츠의 갯수
  const totalContents = images.total; //전체 이미지 수
  const totalPages = images.total_pages as number; //전체 페이지 수
  const pageGroup = Math.ceil(option.page / btnPerPage); //현재 화면에 보여질 페이지 그룹 1 ~ 5 / 6 ~ 10 / 11 ~ 15
  const pageGroupFirstNumber = (pageGroup - 1) * btnPerPage + 1; //페이지그룹 첫번째 숫자
  const pageGroupLastNumber =
    pageGroup * btnPerPage > totalPages ? totalPages : pageGroup * btnPerPage; //페이지그룹 마지막 숫자

  const router = useRouter();

  let renderPageGroup = [];
  for (let i = pageGroupFirstNumber; i <= pageGroupLastNumber; i++) {
    renderPageGroup.push(i);
  }

  if (option.page < 1) {
    router.push(`?path=${option.searchParams.path}&page=1`);
  }

  /*
페이지 네이션

필요한 4가지 값
총 페이지수 = 전체 콘텐츠 / 한페이지에 보여주고자 하는 컨텐츠 갯수
화면에 보여질 페이지 그룹 = Math.ceil(현재 페이지 번호 / 한 화면에 보여질 페이지 갯수) ex| 전체페이지가 10페이지, 페이지 그룹은 5개씩이라면 1 ~ 5 / 5 는 반올림하면 1 이기때문에 1페이지 그룹이 보여짐 -> 5~10 페이지는 5로나누고 반올림하면 2 이기 때문에 2페이지 그룹이 보여진다. 
화면에 보여질 페이지의 첫번째 페이지 번호  ((페이지그룹 - 1) * 한 화면에 보여질 페이지의 수 ) + 1
화면에 보여질 페이지의 마지막 페이지 번호  (페이지그룹 * 한 화면에 보여질 페이지의 수) 단, (페이지그룹 * 한 화면에 보여질 페이지의 수) 이 값이 전체 페이지보다 크다면 전체 페이지가 마지막 페이지 번호가 된다.

*/

  return (
    <div className={styles.page_nation}>
      <div className={styles.prev_buttons}>
        <ul>
          <li>
            {option.page === 1 ? null : (
              <Link
                href={`?path=${option.searchParams.path}&page=${
                  option.page - 5
                }`}
              >
                &lt;&lt;
              </Link>
            )}
          </li>
          <li>
            {option.page === 1 ? null : (
              <Link
                href={`?path=${option.searchParams.path}&page=${
                  option.page - 1
                }`}
              >
                &lt;
              </Link>
            )}
          </li>
        </ul>
      </div>
      <div className={styles.page_nation_buttons}>
        <ul>
          {option.page > 1 ? (
            <li>
              <Link href={`?path=${option.searchParams.path}&page=1`}>
                1...
              </Link>
            </li>
          ) : null}
          {/* {renderPageGroup.map((item) => {
            return (
              <li key={item}>
                {
                  <Link
                    href={`?path=${option.searchParams.path}&page=${item}`}
                    style={
                      item === option.page
                        ? { color: "#333", fontWeight: "bold" }
                        : {}
                    }
                  >
                    {item}
                  </Link>
                }
              </li>
            );
          })} */}
          {renderPageGroup.length === 0 ? (
            <li>0</li>
          ) : (
            renderPageGroup.map((item) => (
              <li key={item}>
                <Link
                  href={`?path=${option.searchParams.path}&page=${item}`}
                  style={
                    item === option.page
                      ? { color: "#333", fontWeight: "bold" }
                      : {}
                  }
                >
                  {item}
                </Link>
              </li>
            ))
          )}
          {option.page < totalPages ? (
            <li>
              <Link
                href={`?path=${option.searchParams.path}&page=${totalPages}`}
              >
                {`...${totalPages}`}
              </Link>
            </li>
          ) : null}
        </ul>
      </div>
      <div className={styles.next_buttons}>
        <ul>
          <li>
            {option.page === totalPages ? null : (
              <Link
                href={`?path=${option.searchParams.path}&page=${
                  option.page + 1
                }`}
              >
                &gt;
              </Link>
            )}
          </li>
          <li>
            {option.page === totalPages ? null : (
              <Link
                href={`?path=${option.searchParams.path}&page=${
                  option.page + 5
                }`}
              >
                &gt;&gt;
              </Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PageNation;

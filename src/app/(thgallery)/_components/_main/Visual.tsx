import React, { Suspense } from "react";
import styles from "../../_styles/main.module.scss";
import SearchForm from "./SearchForm";

const Visual: () => React.JSX.Element = () => {
  return (
    <section className={styles.visual_section}>
      <div className={styles.visual_wrap}>
        <h2>Will Photo</h2>
        <p>
          인터넷의 시각 자료 출처입니다.
          <br />
          모든 지역에 있는 크리에이터들의 지원을 받습니다.
        </p>
        <Suspense fallback={<div>...loadin</div>}>
          <SearchForm />
        </Suspense>
      </div>
    </section>
  );
};

export default Visual;

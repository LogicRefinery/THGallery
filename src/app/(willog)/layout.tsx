import React, { Suspense, useEffect, useState } from "react";
import Header from "./_components/_header/Header";

const layout = ({ children }: { children: React.ReactNode }) => {
/*

  프론트 서버니까 좋아요 누를때마다 서버에서 누른사람 좋아요 누른 이미지 캐싱 가능 ( 객체에 저장 가능 )
  누른 유저에게 캐싱된 이미지 줄 수 있긴함. 근데 이상한 방법임. 
  프론트 서버가 여러개라면, 특정 서버만 그 유저를 기억할수도있음.. 그래서 못줄수도있음.

  1. 이미지객체를 수정하는 방법 : 받아온 이미지 객체를 수정해서 like 상태를 관리한다. : 사용자수가 많으면 애바임 ;
  2. 사용자에게 좋아요 누른 사진을 식별하게 하는 방법 : 상태관리하는 방법, 로컬스토리지 사용하는 방법

  상태관리 하는방법
  1. context Api 등 전역 상태관리 이용한다.
    단점 : 하위 요소들이 모두 클라이언트 컴포넌트가 됨
  2. 로컬스토리지 이용한다. 



*/
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default layout;

import React, { Suspense, useEffect, useState } from "react";
import Header from "./_components/_header/Header";
import Bloking from "./_components/Bloking";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Bloking />
    </>
  );
};

export default layout;

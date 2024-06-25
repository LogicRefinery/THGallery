import React from "react";
import { SearchParams } from "../../_model/searchParams";

import Visual from "./Visual";
import Images from "./Images";

const Main = ({ searchParams }: { searchParams: SearchParams }) => {
  return (
    <main>
      <Visual />
      <Images searchParams={searchParams} />
    </main>
  );
};

export default Main;

import React from "react";
import { SearchParams } from "../../_model/searchParams";

import Visual from "./Visual";
import Images from "./Images";

const Main = ({ searchParams }: { searchParams: SearchParams }) => {
  return (
    <main>
      <Visual />
      <Images searchParams={searchParams} />
      {/* <Images searchParams={searchParams}></Images> */}
    </main>
  );
};

export default Main;

// const Main: ({
//   searchParam,
// }: {
//   searchParam: { [key: string]: string };
// }) => React.JSX.Element = ({
//   searchParam,
// }: {
//   searchParam: { [key: string]: string };
// }) => {
//   return (
//     <main>
//       <Visual />
//       <Images searchParam={searchParam} />
//     </main>
//   );
// };

// export default Main;

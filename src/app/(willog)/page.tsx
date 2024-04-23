import Main from "./_components/_main/Main";
import Footer from "./_components/_footer/Footer";
import { SearchParams } from "./_model/searchParams";

export default function Home({ searchParams }: { searchParams: SearchParams }) {
  return (
    <>
      <Main searchParams={searchParams} />
      <Footer />
    </>
  );
}

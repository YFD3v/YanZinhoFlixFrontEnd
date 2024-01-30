import ContainerSearch from "@/components/Search";
import HeaderAuth from "@/components/common/HeaderAuth";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000/search"),
  title: "YanZinhoFlix - Busca",
  description: "Pesquise o curso desejado",
  openGraph: {
    title: "YanZinhoFlix - Busca",
    description: "Pesquise o curso desejado",
  },
};

//Passo 30 - backend do search
const Search = () => {
  return (
    <>
      <HeaderAuth />
      <ContainerSearch />
    </>
  );
};

export default Search;

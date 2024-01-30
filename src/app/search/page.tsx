import ContainerSearch from "@/components/Search";
import Footer from "@/components/common/Footer";
import HeaderAuth from "@/components/common/HeaderAuth";
import { Metadata } from "next";

import styles from "./search.module.scss";

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
    <div className={styles.main}>
      <div className={styles.header}>
        <HeaderAuth />
      </div>
      <div className={styles.searchResult}>
        <ContainerSearch />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default Search;

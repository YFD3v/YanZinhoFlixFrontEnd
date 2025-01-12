import ContainerSearch from "@/components/Search";
import Footer from "@/components/common/Footer";
import HeaderAuth from "@/components/common/HeaderAuth";
import { Metadata } from "next";

import styles from "./search.module.scss";
import { Suspense } from "react";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000/search"),
  title: "YanZinhoFlix - Busca",
  description: "Pesquise o curso desejado",
  openGraph: {
    title: "YanZinhoFlix - Busca",
    description: "Pesquise o curso desejado",
  },
};

const Search = () => {
  return (
    <Suspense>
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
    </Suspense>
  );
};

export default Search;

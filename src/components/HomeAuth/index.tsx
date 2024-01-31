//Passo 19 - criando a estrutura da página homeauth
"use client";

import { useRouter } from "next/navigation";
import Footer from "../common/Footer";
import FavoriteCategory from "./FavoriteCategory";
import FeaturedCategory from "./FeaturedCategory";
import FeaturedSection from "./FeaturedSection";
import ListCategories from "./ListCategories";
import NewestCategory from "./NewestCategory";
import { useEffect, useState } from "react";
import PageSpinner from "../common/Spinner";

const ContainerHomeAuth = () => {
  //Passo 36 - implementando autenticação em todas as páginas
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!sessionStorage.getItem("yanzinhoflix-token")) {
      router.push("/login");
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) return <PageSpinner />;
  //Fim passo 36
  return (
    <>
      <FeaturedSection />
      <FavoriteCategory />
      <NewestCategory />
      <FeaturedCategory />
      <ListCategories />
      <Footer />
    </>
  );
};

export default ContainerHomeAuth;

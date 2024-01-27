//Passo 19 - criando a estrutura da página homeauth
"use client";

import Footer from "../common/Footer";
import FavoriteCategory from "./FavoriteCategory";
import FeaturedCategory from "./FeaturedCategory";
import FeaturedSection from "./FeaturedSection";
import ListCategories from "./ListCategories";
import NewestCategory from "./NewestCategory";

const ContainerHomeAuth = () => {
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

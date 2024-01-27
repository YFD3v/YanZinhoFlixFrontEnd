//Passo 19 - criando a estrutura da página homeauth
"use client";

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
    </>
  );
};

export default ContainerHomeAuth;

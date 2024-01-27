//Passo 19 - criando a estrutura da página homeauth
"use client";

import FavoriteCategory from "./FavoriteCategory";
import FeaturedSection from "./FeaturedSection";
import NewestCategory from "./NewestCategory";

const ContainerHomeAuth = () => {
  return (
    <>
      <FeaturedSection />
      <FavoriteCategory />
      <NewestCategory />
    </>
  );
};

export default ContainerHomeAuth;

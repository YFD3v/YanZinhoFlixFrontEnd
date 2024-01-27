//Passo 19 - criando a estrutura da página homeauth
"use client";

import HeaderAuth from "../common/HeaderAuth";
import FeaturedSection from "./FeaturedSection";
import NewestCategory from "./NewestCategory";

const ContainerHomeAuth = () => {
  return (
    <>
      <FeaturedSection />
      <NewestCategory />
    </>
  );
};

export default ContainerHomeAuth;

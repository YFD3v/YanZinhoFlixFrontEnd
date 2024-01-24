import HeaderNoAuth from "@/components/HomeNoAuth/HeaderNoAuth";
import styles from "./HomeNoAuth.module.scss";
import PresentationSection from "@/components/HomeNoAuth/PresentationSection";
import CardsSection from "@/components/HomeNoAuth/CardsSection";

//Passo 1 - Configuração do projeto

const HomeNoAuth = () => {
  return (
    <>
      {/*Passo 4 - Criando o header parte 1 */}
      <div className={styles.sectionBackground}>
        <HeaderNoAuth />
        <PresentationSection />
      </div>
      {/*Passo 7 - Criaçaõ da seção de cards */}
      <CardsSection />
    </>
  );
};
export default HomeNoAuth;

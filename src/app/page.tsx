import HeaderNoAuth from "@/components/HomeNoAuth/HeaderNoAuth";
import styles from "./HomeNoAuth.module.scss";
import PresentationSection from "@/components/HomeNoAuth/PresentationSection";

//Passo 1 - Configuração do projeto

const HomeNoAuth = () => {
  return (
    <>
      {/*Passo 4 - Criando o header parte 1 */}
      <div className={styles.sectionBackground}>
        <HeaderNoAuth />
        <PresentationSection />
      </div>
    </>
  );
};
export default HomeNoAuth;

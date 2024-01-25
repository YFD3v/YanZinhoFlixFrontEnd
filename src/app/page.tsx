export const revalidate = 3600 * 24;
import HeaderNoAuth from "@/components/HomeNoAuth/HeaderNoAuth";
import styles from "./HomeNoAuth.module.scss";
import PresentationSection from "@/components/HomeNoAuth/PresentationSection";
import CardsSection from "@/components/HomeNoAuth/CardsSection";
import SlideSection from "@/components/HomeNoAuth/SlideSection";
import courseService, { CourseType } from "@/services/courseService";

//Passo 1 - Configuração do projeto

const HomeNoAuth = async () => {
  const courses: CourseType[] = await getData();
  return (
    <>
      {/*Passo 4 - Criando o header parte 1 */}
      <div className={styles.sectionBackground}>
        <HeaderNoAuth />
        <PresentationSection />
      </div>
      {/*Passo 7 - Criaçaõ da seção de cards */}
      <CardsSection />
      {/*Passo 11 - Colocando em tela os slides */}
      <SlideSection newestCourses={courses} />
    </>
  );
};

//Passo 11 - Colocando em tela os slides
export const getData = async () => {
  const res = await courseService.getNewestCourses();
  return res.data;
};

export default HomeNoAuth;

export const revalidate = 3600 * 24;
import HeaderNoAuth from "@/components/HomeNoAuth/HeaderNoAuth";
import styles from "./HomeNoAuth.module.scss";
import PresentationSection from "@/components/HomeNoAuth/PresentationSection";
import CardsSection from "@/components/HomeNoAuth/CardsSection";
import SlideSection from "@/components/HomeNoAuth/SlideSection";
import courseService, { CourseType } from "@/services/courseService";
import Footer from "@/components/common/Footer";
import { AOSInit } from "../common/aos";
//Passo 1 - Configuração do projeto
const ContainerHomeNoAuth = async () => {
  //Passo 13 - instalação AOS foi adicionado data-aos e data-aos-dura
  const courses: CourseType[] = await getData();

  return (
    <>
      {/*Passo 4 - Criando o header parte 1 */}
      <AOSInit />
      <div
        className={styles.sectionBackground}
        data-aos="fade-zoom-in"
        data-aos-duration="1600"
      >
        <HeaderNoAuth />
        <PresentationSection />
      </div>
      {/*Passo 7 - Criaçaõ da seção de cards */}
      <div data-aos="fade-right" data-aos-duration="1200">
        <CardsSection />
      </div>
      {/*Passo 11 - Colocando em tela os slides */}
      <div data-aos="fade-up" data-aos-duration="1350">
        <SlideSection newestCourses={courses} />
      </div>
      {/*Passo 12 - criação do footer */}
      <Footer />
    </>
  );

  //Passo 11 - Colocando em tela os slides
};
export const getData = async () => {
  const res = await courseService.getNewestCourses();

  return res.data;
};

export default ContainerHomeNoAuth;

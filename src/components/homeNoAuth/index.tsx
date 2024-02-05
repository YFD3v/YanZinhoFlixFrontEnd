import HeaderNoAuth from "@/components/HomeNoAuth/HeaderNoAuth";
import styles from "./HomeNoAuth.module.scss";
import PresentationSection from "@/components/HomeNoAuth/PresentationSection";
import CardsSection from "@/components/HomeNoAuth/CardsSection";
import SlideSection from "@/components/HomeNoAuth/SlideSection";
import courseService, { CourseType } from "@/services/courseService";
import Footer from "@/components/common/Footer";
import { AOSInit } from "../common/aos";

const ContainerHomeNoAuth = async () => {
  const courses: CourseType[] = await getData();

  return (
    <>
      <AOSInit />
      <div
        className={styles.sectionBackground}
        data-aos="fade-zoom-in"
        data-aos-duration="1600"
      >
        <HeaderNoAuth />
        <PresentationSection />
      </div>

      <div data-aos="fade-right" data-aos-duration="1200">
        <CardsSection />
      </div>

      <div data-aos="fade-up" data-aos-duration="1350">
        <SlideSection newestCourses={courses} />
      </div>

      <Footer />
    </>
  );
};
export const getData = async () => {
  const res = await courseService.getNewestCourses();

  return res.data;
};

export default ContainerHomeNoAuth;

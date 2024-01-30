import Footer from "@/components/common/Footer";
import styles from "./coursePage.module.scss";
import HeaderAuth from "@/components/common/HeaderAuth";
import CourseContainer from "@/components/CourseContainer";
//Passo 32 - backend da pagina de curso
const CoursePage = () => {
  return (
    <>
      <div className={styles.header}>
        <HeaderAuth />
      </div>
      <div>
        <CourseContainer />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </>
  );
};

export default CoursePage;

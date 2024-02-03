import Footer from "@/components/common/Footer";
import styles from "./coursePage.module.scss";
import HeaderAuth from "@/components/common/HeaderAuth";
import CourseContainer from "@/components/CourseContainer";
const CoursePage = () => {
  return (
    <>
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

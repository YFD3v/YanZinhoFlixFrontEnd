import Footer from "@/components/common/Footer";
import styles from "./coursePage.module.scss";
import CourseContainer from "@/components/CourseContainer";
import courseService from "@/services/courseService";

export async function generateStaticParams() {
  const res = await courseService.allIds();
  return res.data.map((item: { id: number }) => ({
    params: {
      id: item.id.toString(),
    },
  }));
}

const CoursePage = ({ params }: { params: { id: string } }) => {
  return (
    <>
      <div>
        <CourseContainer id={params.id} />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </>
  );
};

export default CoursePage;

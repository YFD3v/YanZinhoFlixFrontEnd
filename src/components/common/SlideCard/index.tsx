//Passo 8 - crianda seção de cards
import styles from "./styles.module.scss";
import { CourseType } from "@/services/courseService";

//Passo 10 - finalização da estrutura dos slides, foi substituido os valores da img e dos p
interface props {
  course: CourseType;
}

const SlideCard = ({ course }: props) => {
  return (
    <>
      <div className={styles.slide}>
        <img
          className={styles.slideImg}
          src={`${process.env.NEXT_PUBLIC_BASEURL}/${course.thumbnailUrl}`}
          alt={course.name}
        />
        <p className={styles.slideTitle}>{course.name}</p>
        <p className={styles.slideDescription}>{course.synopsis}</p>
      </div>
    </>
  );
};

export default SlideCard;

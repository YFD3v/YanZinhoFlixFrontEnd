import { CourseType } from "@/services/courseService";
import styles from "../styles.module.scss";
import Link from "next/link";

interface props {
  course: CourseType;
}

const CardSearch = ({ course }: props) => {
  return (
    <>
      <Link className={styles.link} href={`/courses/${course.id}`}>
        <div className={styles.searchCard}>
          <img
            src={`${process.env.NEXT_PUBLIC_BASEURL}/${course.thumbnailUrl}`}
            alt={course.name}
            className={styles.searchCardImg}
          />
          <p className={styles.searchCardName}>{course.name}</p>
          <p className={styles.searchCardDescription}>{course.synopsis}</p>
        </div>
      </Link>
    </>
  );
};

export default CardSearch;

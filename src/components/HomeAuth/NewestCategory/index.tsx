import SlideComponent from "@/components/common/SlideComponent";
import courseService from "@/services/courseService";
import useSWR from "swr";
import styles from "../styles.module.scss";
import PageSpinner from "@/components/common/Spinner";
const NewestCategory = () => {
  const { data, error } = useSWR("/newest", courseService.getNewestCourses);
  if (error) return error;
  if (!data) return <PageSpinner></PageSpinner>;
  return (
    <>
      <p className={styles.titleCategory}>LANÇAMENTOS: </p>
      <SlideComponent courses={data.data} />
    </>
  );
};

export default NewestCategory;

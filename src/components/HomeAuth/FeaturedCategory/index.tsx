import useSWR from "swr";
import styles from "../styles.module.scss";
import courseService from "@/services/courseService";
import SlideComponent from "@/components/common/SlideComponent";
import PageSpinner from "@/components/common/Spinner";
const FeaturedCategory = () => {
  const { data, error } = useSWR("/featured", courseService.getFeaturedCourses);
  if (error) return error;
  if (!data) return <PageSpinner></PageSpinner>;
  return (
    <>
      <p className={styles.titleCategory}>EM DESTAQUE: </p>
      <SlideComponent courses={data.data} />
    </>
  );
};

export default FeaturedCategory;

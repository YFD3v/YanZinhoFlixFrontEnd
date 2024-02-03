import useSWR from "swr";
import styles from "../styles.module.scss";
import courseService from "@/services/courseService";
import SlideComponent from "@/components/common/SlideComponent";
import PageSpinner from "@/components/common/Spinner";
const FavoriteCategory = () => {
  const { data, error } = useSWR("/favorites", courseService.getFavCourses);
  if (error) return error;
  if (!data) return <PageSpinner />;
  return (
    <>
      <p className={styles.titleCategory}>Meus favoritos:</p>
      {data.data.courses?.length >= 1 ? (
        <SlideComponent courses={data.data.courses} />
      ) : (
        <p className="text-center pt-3 h5">
          <strong>Não há cursos favoritos :(</strong>
        </p>
      )}
    </>
  );
};

export default FavoriteCategory;

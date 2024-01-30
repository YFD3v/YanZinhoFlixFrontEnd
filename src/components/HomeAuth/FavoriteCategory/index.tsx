import useSWR from "swr";
import styles from "../styles.module.scss";
import courseService from "@/services/courseService";
import SlideComponent from "@/components/common/SlideComponent";
import PageSpinner from "@/components/common/Spinner";
//Passo 22 - criação da seção de favoritos
const FavoriteCategory = () => {
  const { data, error } = useSWR("/favorites", courseService.getNewestCourses);
  if (error) return error;
  if (!data) return <PageSpinner />;
  return (
    <>
      <p className={styles.titleCategory}>Meus favoritos:</p>
      {data.data.courses?.length >= 1 ? (
        <SlideComponent courses={data.data} />
      ) : (
        <p className="text-center pt-3 h5">
          <strong>Não há cursos favoritos :(</strong>
        </p>
      )}
    </>
  );
};

export default FavoriteCategory;

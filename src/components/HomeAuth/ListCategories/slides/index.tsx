import SlideComponent from "@/components/common/SlideComponent";
import categoriesService from "@/services/categoriesService";
import useSWR from "swr";
import styles from "../../styles.module.scss";

interface props {
  categoryId: number;
  categoryName: string;
}

const ListCategoriesSlide = ({ categoryId, categoryName }: props) => {
  //Esse swr é um facilitador para fazer fetch no backEnd

  const { data, error } = useSWR(`/categoriesCourses/${categoryId}`, () =>
    categoriesService.getCourses(categoryId)
  );
  if (error) return error;
  if (!data)
    return (
      <>
        <p>Loading...</p>
      </>
    );
  return (
    <>
      <p className={styles.titleCategory}>{categoryName}</p>
      <SlideComponent courses={data.data.courses} />
    </>
  );
};

export default ListCategoriesSlide;

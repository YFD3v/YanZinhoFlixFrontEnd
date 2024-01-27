import useSWR from "swr";
import styles from "../styles.module.scss";
import courseService from "@/services/courseService";
import SlideComponent from "@/components/common/SlideComponent";
//Passo 23  - criação da seção de slides de destaque
const FeaturedCategory = () => {
  //Esse swr é um facilitador para fazer fetch no backEnd

  const { data, error } = useSWR("/featured", courseService.getFeaturedCourses);
  if (error) return error;
  if (!data)
    return (
      <>
        <p>Loading...</p>
      </>
    );
  return (
    <>
      <p className={styles.titleCategory}>EM DESTAQUE: </p>
      <SlideComponent courses={data.data} />
    </>
  );
};

export default FeaturedCategory;

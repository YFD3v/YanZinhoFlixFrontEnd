import SlideComponent from "@/components/common/SlideComponent";
import courseService from "@/services/courseService";
import useSWR from "swr";
import styles from "../styles.module.scss";
//Passo 21 - criação da seção de slides de lançamento
const NewestCategory = () => {
  //Esse swr é um facilitador para fazer fetch no backEnd

  const { data, error } = useSWR("/newest", courseService.getNewestCourses);
  if (error) return error;
  if (!data)
    return (
      <>
        <p>Loading...</p>
      </>
    );
  return (
    <>
      <p className={styles.titleCategory}>LANÇAMENTOS: </p>
      <SlideComponent courses={data.data} />
    </>
  );
};

export default NewestCategory;

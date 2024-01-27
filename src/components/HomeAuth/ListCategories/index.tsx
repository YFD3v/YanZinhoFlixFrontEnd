import categoriesService, { CategoryType } from "@/services/categoriesService";
import useSWR from "swr";
import ListCategoriesSlide from "./slides";
//Passo 24 Criação da seção da lista de slides
const ListCategories = () => {
  //Esse swr é um facilitador para fazer fetch no backEnd

  const { data, error } = useSWR(
    "/listCategories",
    categoriesService.getCategories
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
      {data.data.categories?.map((category: CategoryType) => (
        <ListCategoriesSlide
          categoryId={category.id}
          key={category.id}
          categoryName={category.name}
        />
      ))}
    </>
  );
};

export default ListCategories;

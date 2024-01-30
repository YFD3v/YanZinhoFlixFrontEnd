import categoriesService, { CategoryType } from "@/services/categoriesService";
import useSWR from "swr";
import ListCategoriesSlide from "./slides";
import PageSpinner from "@/components/common/Spinner";
//Passo 24 Criação da seção da lista de slides
const ListCategories = () => {
  //Esse swr é um facilitador para fazer fetch no backEnd

  const { data, error } = useSWR(
    "/listCategories",
    categoriesService.getCategories
  );
  if (error) return error;
    //Passo 29 - criando o loader de spinner
  //Antes era so um return Loading...
  if (!data) return <PageSpinner></PageSpinner>;
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

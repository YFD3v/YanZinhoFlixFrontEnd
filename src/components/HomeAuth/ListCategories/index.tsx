import categoriesService, { CategoryType } from "@/services/categoriesService";
import useSWR from "swr";
import ListCategoriesSlide from "./slides";
import PageSpinner from "@/components/common/Spinner";
const ListCategories = () => {
  const { data, error } = useSWR(
    "/listCategories",
    categoriesService.getCategories
  );
  if (error) return error;
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

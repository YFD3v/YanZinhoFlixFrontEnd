"use client";
import styles from "./styles.module.scss";
import courseService, { CourseType } from "@/services/courseService";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Container } from "reactstrap";
import CardSearch from "./Card";
import { useRouter } from "next/router";
import PageSpinner from "../common/Spinner";
//passo 30 - backend do search
export default function ContainerSearch() {
  const query = useSearchParams();
  const searchName: any = query.get("name");
  const [searchResult, setSearchResult] = useState<CourseType[]>([]);
  const searchCourses = async () => {
    const res = await courseService.getSearch(searchName);
    setSearchResult(res.data.courses);
  };

  useEffect(() => {
    searchCourses();
  }, [searchName]);

  //Passo 36 - implementando autenticação em todas as páginas
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!sessionStorage.getItem("yanzinhoflix-token")) {
      router.push("/login");
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) return <PageSpinner />;
  //Fim passo 36

  return (
    <>
      {searchResult.length >= 1 ? (
        <Container className="d-flex flex-wrap justify-content-center gap-5 py-4">
          {searchResult?.map((course) => (
            <CardSearch key={course.id} course={course} />
          ))}
        </Container>
      ) : (
        <p className={styles.noSearchResult}>Nenhum resultado encontrado...</p>
      )}
    </>
  );
}

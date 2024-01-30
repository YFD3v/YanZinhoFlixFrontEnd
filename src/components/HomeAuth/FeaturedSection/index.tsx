import useSWR from "swr";
import styles from "./styles.module.scss";
import courseService, { CourseType } from "@/services/courseService";
import HeaderAuth from "@/components/common/HeaderAuth";
import { Button, Container } from "reactstrap";
import Link from "next/link";
import PageSpinner from "@/components/common/Spinner";

//Passo 20 - criação da seção ed cursos em destaque

const FeaturedSection = () => {
  //Esse swr é um facilitador para fazer fetch no backEnd

  const { data, error } = useSWR("/featured", courseService.getFeaturedCourses);
  if (error) return error;
  if (!data) return <PageSpinner></PageSpinner>;

  return (
    <>
      {
        data.data?.map((course: CourseType) => (
          <div
            style={{
              backgroundImage: `linear-gradient(to bottom, #6666661a, #151515), url(${process.env.NEXT_PUBLIC_BASEURL}/${course.thumbnailUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "480px",
            }}
            key={course.id}
          >
            <HeaderAuth />
            <Container className="pt-4">
              <p className={styles.title}>{course.name}</p>
              <p className={styles.description}>{course.synopsis}</p>
              <Link className={styles.link} href={`/courses/${course.id}`}>
                <Button className={styles.button} outline color="light">
                  ACESSE AGORA
                  <img
                    src="/buttonPlay.svg"
                    alt="buttonImg"
                    className={styles.buttonImg}
                  />
                </Button>
              </Link>
            </Container>
          </div>
        ))[0]
      }
    </>
  );
};

export default FeaturedSection;

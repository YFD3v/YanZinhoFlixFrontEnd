"use client";
import { CourseType } from "@/services/courseService";
import styles from "./styles.module.scss";
import { Button, Container } from "reactstrap";
import SlideComponent from "@/components/common/SlideComponent";
import Link from "next/link";
//Passo 11 - Colocando em tela os slides
interface props {
  newestCourses: CourseType[];
}

const SlideSection = ({ newestCourses }: props) => {
  return (
    <>
      <Container>
        <p className={styles.sectionTitle}>AULAS JÁ DISPONÍVEIS</p>
        <SlideComponent courses={newestCourses} />
        <Link href="/register">
          <Button color="light" outline className={styles.slideSectionBtn}>
            Cadastre-se para acessar!
          </Button>
        </Link>
      </Container>
    </>
  );
};

export default SlideSection;

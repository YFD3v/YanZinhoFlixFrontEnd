"use client";

import { useParams, useRouter } from "next/navigation";
import HeaderGeneric from "../common/HeaderGeneric";
import courseService, { CourseType } from "@/services/courseService";
import { useEffect, useState } from "react";
import PageSpinner from "../common/Spinner";
import styles from "./styles.module.scss";
import { Button, Container } from "reactstrap";
import ReactPlayer from "react-player";
//Criaçaõ da estrutuda ra pagina de episodios
const EpisodeContainer = () => {
  const router = useRouter();
  const [course, setCourse] = useState<CourseType>();
  const { id } = useParams();
  const { episodeId }: any = useParams();
  const getCourse = async function () {
    if (typeof id !== "string") return;
    const res = await courseService.getEpisodes(id);
    if (res.status === 200) {
      setCourse(res.data);
    }
  };

  useEffect(() => {
    getCourse();
  }, [id]);

  const handleLastEpisode = () => {
    router.push(
      `/courses/${course?.id}/episodes/${episodeId - 1}/?courseid=${course?.id}`
    );
  };

  const handleNextEpisode = () => {
    router.push(
      `/courses/${course?.id}/episodes/${parseFloat(episodeId) + 1}/?courseid=${
        course?.id
      }`
    );
  };

  if (course?.episodes === undefined) return <PageSpinner />;
  return (
    <>
      <HeaderGeneric
        logoUrl="/home"
        btnContent={"Voltar para o curso"}
        btnUrl={`/courses/${id}`}
      />
      <Container className="d-flex flex-column align-items-center gap-3 pt-3">
        <p className={styles.episodeTitle}>
          {course.episodes[episodeId]?.name}
        </p>
        {typeof window === "undefined" ? null : (
          <ReactPlayer
            className={styles.player}
            url={`${process.env.NEXT_PUBLIC_BASEURL}/episodes/stream?videoUrl=${
              course.episodes[episodeId].videoUrl
            }&token=${sessionStorage.getItem("yanzinhoflix-token")}`}
            controls
          />
        )}
        <div className={styles.episodeButtons}>
          <Button
            className={styles.episodeButton}
            disabled={episodeId == 0 ? true : false}
            onClick={handleLastEpisode}
          >
            <img
              src="/episode/iconArrowLeft.svg"
              alt="setaEsquerda"
              className={styles.arrowImg}
            />
          </Button>
          <Button
            className={styles.episodeButton}
            disabled={
              parseFloat(episodeId) + 1 == course.episodes.length ? true : false
            }
            onClick={handleNextEpisode}
          >
            <img
              src="/episode/iconArrowRight.svg"
              alt="setaDireita"
              className={styles.arrowImg}
            />
          </Button>
        </div>
        <p className="text-center py-4">
          {course.episodes[episodeId].synopsis}
        </p>
      </Container>
    </>
  );
};

export default EpisodeContainer;

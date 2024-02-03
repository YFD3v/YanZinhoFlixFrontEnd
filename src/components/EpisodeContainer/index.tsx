"use client";

import { useParams, useRouter } from "next/navigation";
import HeaderGeneric from "../common/HeaderGeneric";
import courseService, { CourseType } from "@/services/courseService";
import { useEffect, useRef, useState } from "react";
import PageSpinner from "../common/Spinner";
import styles from "./styles.module.scss";
import { Button, Container } from "reactstrap";
import ReactPlayer from "react-player";
import episodeService from "@/services/episodeService";
const EpisodeContainer = () => {
  const router = useRouter();
  const [course, setCourse] = useState<CourseType>();
  const { id } = useParams();
  const { episodeId }: any = useParams();

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!sessionStorage.getItem("yanzinhoflix-token")) {
      router.push("/login");
    } else {
      setLoading(false);
    }
  }, []);
  const [getEpisodeTime, setGetEpisodeTime] = useState(0);
  const [episodeTime, setEpisodeTime] = useState(0);
  const playerRef = useRef<ReactPlayer>(null);
  const [isReady, setIsReady] = useState(false);

  const handleGetEpisodeTime = async () => {
    const res = await episodeService.getWatchTime(parseFloat(episodeId) + 1);
    if (res.data !== null) {
      setGetEpisodeTime(res.data.seconds);
    }
    console.log(res.data);
  };

  const handleSetEpisodeTime = async () => {
    await episodeService.setWatchTime({
      episodeId: parseFloat(episodeId) + 1,
      seconds: Math.round(episodeTime),
    });
  };

  useEffect(() => {
    handleGetEpisodeTime();
  }, [router]);

  const handlePlayerTime = () => {
    playerRef.current?.seekTo(getEpisodeTime);
    setIsReady(true);
  };

  if (isReady === true) {
    setTimeout(() => {
      handleSetEpisodeTime();
    }, 1000 * 3);
  }
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

  if (course?.episodes === undefined) return <PageSpinner />;
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

  if (parseFloat(episodeId) + 1 < course?.episodes?.length) {
    console.log(
      Math.round(episodeTime),
      course.episodes[episodeId].secondsLong
    );
    if (Math.round(episodeTime) == course.episodes[episodeId].secondsLong) {
      handleNextEpisode();
    }
  }

  if (loading) return <PageSpinner />;

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
            ref={playerRef}
            onStart={handlePlayerTime}
            onProgress={(progress) => setEpisodeTime(progress.playedSeconds)}
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

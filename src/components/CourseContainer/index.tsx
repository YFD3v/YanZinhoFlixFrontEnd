"use client";
import courseService, { CourseType } from "@/services/courseService";
import styles from "./styles.module.scss";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import HeaderAuth from "../common/HeaderAuth";
import { Button, Container } from "reactstrap";
import PageSpinner from "../common/Spinner";
import EpisodeList from "./EpisodeList";
//Passo 32 - backend da pagina de curso
const CourseContainer = () => {
  const { id } = useParams();
  const [course, setCourse] = useState<CourseType>();

  //Passo 33 - visual da pagina de curso
  const [like, setLike] = useState(false);
  const [favorite, setFavorite] = useState(false);
  //Fim passo 33

  const getCourse = async () => {
    if (typeof id !== "string") return;
    const res = await courseService.getEpisodes(id);
    if (res.status === 200) {
      setCourse(res.data);
      //Passo 33 - visual da pagina de curso
      setLike(res.data.liked);
      setFavorite(res.data.favorited);
    }
  };

  useEffect(() => {
    getCourse();
  }, [id]);

  //Passo 33 -  visual da pagina de curso
  //Estou colocando em baixo do useEffect, poís o handle depende do getCourse que faz o setLike e set Favorite
  const handleLikeCourse = async () => {
    if (typeof id !== "string") return;
    if (like === true) {
      await courseService.removelike(id);
      setLike(false);
    } else {
      await courseService.like(id);
      setLike(true);
    }
  };

  const handleFavCourse = async () => {
    if (typeof id !== "string") return;
    if (favorite === true) {
      await courseService.removeFav(id);
      setFavorite(false);
    } else {
      await courseService.addToFav(id);
      setFavorite(true);
    }
  };

  if (course === undefined) return <PageSpinner />;
  //Fim passo 33

  return (
    <>
      <div
        style={{
          backgroundImage: `linear-gradient(to bottom, #6666661a, #151515),
        url(${process.env.NEXT_PUBLIC_BASEURL}/${course?.thumbnailUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "550px",
        }}
      >
        <HeaderAuth />
      </div>
      <Container className={styles.courseInfo}>
        <p className={styles.courseTitle}>{course?.name}</p>
        <p className={styles.courseDescription}>{course?.synopsis}</p>
        <Button
          outline
          className={styles.courseBtn}
          disabled={course?.episodes?.length === 0 ? true : false}
        >
          ASSISTA AGORA{" "}
          <img
            src="/buttonPlay.svg"
            alt="buttonImg"
            className={styles.buttonImg}
          />
        </Button>
        <div className={styles.interactions}>
          {like === false ? (
            <img
              src="/course/iconLike.svg"
              alt="LikeImage"
              className={styles.interactionImg}
              onClick={handleLikeCourse}
            />
          ) : (
            <img
              src="/course/iconLiked.svg"
              alt="LikeImage"
              className={styles.interactionImg}
              onClick={handleLikeCourse}
            />
          )}
          {favorite === false ? (
            <img
              src="/course/iconAddFav.svg"
              alt="FavImage"
              className={styles.interactionImg}
              onClick={handleFavCourse}
            />
          ) : (
            <img
              src="/course/iconFavorited.svg"
              alt="FavImage"
              className={styles.interactionImg}
              onClick={handleFavCourse}
            />
          )}
        </div>
      </Container>
      <Container className={styles.episodeInfo}>
        <p className={styles.episodeDivision}>EPISÓDIOS:</p>
        <p className={styles.episodeLength}>
          {course?.episodes?.length} episódios
        </p>
        {course?.episodes?.length === 0 ? (
          <p>
            <strong>
              Não temos episódios ainda, volte oura hora! &#x1F606;&#x1F918;
            </strong>
          </p>
        ) : (
          course?.episodes?.map((episode) => (
            <EpisodeList key={episode.id} episode={episode} />
          ))
        )}
      </Container>
    </>
  );
};

export default CourseContainer;

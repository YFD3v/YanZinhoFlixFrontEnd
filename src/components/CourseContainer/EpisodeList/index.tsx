import { CourseType, EpisodeType } from "@/services/courseService";
import styles from "./styles.module.scss";
import { useRouter } from "next/navigation";

interface props {
  course: CourseType;
  episode: EpisodeType;
}

const EpisodeList = ({ episode, course }: props) => {
  const router = useRouter();

  const handleSecondsToMin = (totalSeconds: number) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % minutes;
    function toString(num: number) {
      return num.toString().padStart(2, "0");
    }
    const result = `${toString(minutes)}:${toString(seconds)}s`;
    return result;
  };

  const handleEpisodePlayer = () => {
    router.push(
      `/courses/${course.id}/episodes/${episode.order - 1}?courseid=${
        course.id
      }`
    );
  };

  return (
    <>
      <div className={styles.episodeCard} onClick={handleEpisodePlayer}>
        <div className={styles.episodeOrderTime}>
          <p className={styles.episodeOrder}>Episódio Nº {episode.order}</p>
          <p className={styles.episodeTime}>
            {handleSecondsToMin(episode.secondsLong)}
          </p>
        </div>
        <div className={styles.episodeTitleDescription}>
          <p className={styles.episodeTitle}>{episode.name}</p>
          <p className={styles.episodeDescription}>
            {episode.synopsis} Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Molestias totam soluta nobis a! Saepe possimus
            consequuntur totam cupiditate velit ab dolore eligendi eaque culpa
            soluta? Quaerat recusandae ducimus animi voluptatem?
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A
            aspernatur voluptate ratione fugiat voluptatem distinctio eos
            perspiciatis, sequi, dolor ab cupiditate, qui expedita magni! Eum,
            qui? Repellendus error laboriosam harum.
          </p>
        </div>
      </div>
    </>
  );
};

export default EpisodeList;

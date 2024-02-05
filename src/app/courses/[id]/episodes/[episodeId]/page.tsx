import Footer from "@/components/common/Footer";
import styles from "./episodePage.module.scss";
import EpisodeContainer from "@/components/EpisodeContainer";
import episodeService from "@/services/episodeService";
import courseService from "@/services/courseService";

export async function generateStaticParams() {
  const idsEpisodes = await episodeService.allIds();
  const idsCourses = await courseService.allIds();
  const res = [
    ...idsCourses.data.map((item: { id: number }) => ({
      params: {
        courseId: item.id.toString(),
      },
    })),
    ...idsEpisodes.data.map((item: { id: number }) => ({
      params: {
        episodeId: item.id.toString(),
      },
    })),
  ];
  return res;
}

const EpisodePage = ({
  params,
}: {
  params: { id: string; episodeId: string };
}) => {
  return (
    <>
      <div>
        <EpisodeContainer id={params.id} episodeId={params.episodeId} />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </>
  );
};

export default EpisodePage;

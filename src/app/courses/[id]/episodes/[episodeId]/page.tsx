import Footer from "@/components/common/Footer";
import styles from "./episodePage.module.scss";
import EpisodeContainer from "@/components/EpisodeContainer";
const EpisodePage = () => {
  return (
    <>
      <div>
        <EpisodeContainer />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </>
  );
};

export default EpisodePage;

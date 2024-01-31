import Footer from "@/components/common/Footer";
import styles from "./episodePage.module.scss";
import EpisodeContainer from "@/components/EpisodeContainer";
//Passo 34 - Criaçaõ ede estrutura da pagina de episodios
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

import { Container } from "reactstrap";
import styles from "./styles.module.scss";
//Passo 7 - Criação da seção de cards
const CardsSection = () => {
  return (
    <>
      <p className={styles.sectionTitle}>O QUE VOCÊ VAI ACESSAR</p>
      <Container className="d-flex flex-wrap justify-content-center gap-4 pb-5">
        <div className={styles.card1}>
          <p className={styles.cardTitle}>FRONT - END</p>
          <p className={styles.description}>
            A YanZinhoFlix é o lugar para você evoluir. Para isso, você vai ter
            acesso à diversas aulas de TUDO o que imaginar. Desenvolvimento
            pessoal, estratégia de marketing, programação, TODAS as engenharias
            e muito mais!
          </p>
        </div>
        <div className={styles.card2}>
          <p className={styles.cardTitle}>BACK - END</p>
          <p className={styles.description}>
            A YanZinhoFlix é o lugar para você evoluir. Para isso, você vai ter
            acesso à diversas aulas de TUDO o que imaginar. Desenvolvimento
            pessoal, estratégia de marketing, programação, TODAS as engenharias
            e muito mais!
          </p>
        </div>
        <div className={styles.card3}>
          <p className={styles.cardTitle}>NEGÓCIOS</p>
          <p className={styles.description}>
            A YanZinhoFlix é o lugar para você evoluir. Para isso, você vai ter
            acesso à diversas aulas de TUDO o que imaginar. Desenvolvimento
            pessoal, estratégia de marketing, programação, TODAS as engenharias
            e muito mais!
          </p>
        </div>
        <div className={styles.card4}>
          <p className={styles.cardTitle}>MARKETING</p>
          <p className={styles.description}>
            A YanZinhoFlix é o lugar para você evoluir. Para isso, você vai ter
            acesso à diversas aulas de TUDO o que imaginar. Desenvolvimento
            pessoal, estratégia de marketing, programação, TODAS as engenharias
            e muito mais!
          </p>
        </div>
        <div className={styles.card5}>
          <p className={styles.cardTitle}>CARREIRA</p>
          <p className={styles.description}>
            A YanZinhoFlix é o lugar para você evoluir. Para isso, você vai ter
            acesso à diversas aulas de TUDO o que imaginar. Desenvolvimento
            pessoal, estratégia de marketing, programação, TODAS as engenharias
            e muito mais!
          </p>
        </div>
        <div className={styles.card6}>
          <p className={styles.cardTitle}>ENGENHARIA</p>
          <p className={styles.description}>
            A YanZinhoFlix é o lugar para você evoluir. Para isso, você vai ter
            acesso à diversas aulas de TUDO o que imaginar. Desenvolvimento
            pessoal, estratégia de marketing, programação, TODAS as engenharias
            e muito mais!
          </p>
        </div>
      </Container>
    </>
  );
};

export default CardsSection;

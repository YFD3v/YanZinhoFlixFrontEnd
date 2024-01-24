"use client";
import Link from "next/link";
//Passo 6 - criando seção da apresentação
import styles from "./styles.module.scss";
import { Container, Row, Col, Button } from "reactstrap";

const PresentationSection = () => {
  return (
    <>
      <Container className="py-4">
        <Row>
          <Col md className="d-flex flex-column justify-content-center">
            <p className={styles.subTitle}>ACESSO ILIMITADO</p>
            <p className={styles.title}>
              Tenha fácil acesso aos melhores <br /> vídeos
            </p>
            <p className={styles.description}>
              Assista de onde estiver, a qualquer momento!
            </p>
            <Link href="/register">
              <Button outline className={styles.btnCta}>
                ACESSE AGORA{" "}
                <img
                  className={styles.btnImg}
                  src="/buttonPlay.svg"
                  alt="Button img"
                ></img>
              </Button>
            </Link>
          </Col>
          <Col md>
            <img
              src="/homenoAuth/imgPresentation.png"
              alt="Presentation img"
              className={styles.imgPresentation}
            />
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center pt-5">
            <img
              className={styles.arrowDown}
              src="/homeNoAuth/iconArrowDown.svg"
              alt="Arrow Down"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PresentationSection;

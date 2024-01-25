"use client";
import { Button, Container } from "reactstrap";
import styles from "./styles.module.scss";
import Link from "next/link";
//Passo 4 - Criando o Header

const HeaderNoAuth = () => {
  return (
    <>
      <div className={styles.ctaSection}>
        {/* o Src esta definindo a pasta public como padrão por isso está uma url curta */}
        <img
          src="/homeNoAuth/logoCta.png"
          alt="logoCta"
          className={styles.imgCta}
        />
        <p>Cadastre-se para ter acesso aos cursos</p>
        <img
          src="/homeNoAuth/logoCta.png"
          alt="logoCta"
          className={styles.imgCta}
        />
      </div>
      <Container className={styles.nav}>
        <img
          src="/logoOnebitflix.svg"
          alt="Logo OneBitFlix"
          className={styles.imgLogoNav}
        />
        <div>
          <Link href="/login">
            <Button className={styles.navBtn} outline>
              Entrar
            </Button>
          </Link>
          <Link href="/register">
            <Button className={styles.navBtn} outline>
              Faça parte
            </Button>
          </Link>
        </div>
      </Container>
    </>
  );
};
export default HeaderNoAuth;

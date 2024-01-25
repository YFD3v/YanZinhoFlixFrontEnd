import { Container } from "reactstrap";
import styles from "./styles.module.scss";

const Footer = () => {
  return (
    <>
      <Container className={styles.footer}>
        <img
          src="/logoOneBitCode.svg"
          alt="logoFooter"
          className={styles.footerLogo}
        />
        <a
          href="https:www.youtubem.com"
          target="blank"
          className={styles.footerLink}
        >
          YOUTUBE
        </a>
      </Container>
    </>
  );
};

export default Footer;

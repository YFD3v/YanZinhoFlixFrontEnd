"use client";
import Modal from "react-modal";
import { Container, Form, Input } from "reactstrap";
import styles from "./styles.module.scss";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

//Passo 19 - criando a estrutura da pagina homeAuth

const HeaderAuth = () => {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState(false);

  const handleModal = () => {
    if (modalOpen == true) {
      setModalOpen(false);
    } else {
      setModalOpen(true);
    }
  };

  const handleLogout = () => {
    sessionStorage.clear();
    router.push("/");
  };

  return (
    <>
      <Container className={styles.nav}>
        <Link href={"/home"}>
          <img
            src="/logoOnebitflix.svg"
            alt="logoOnebitFlix"
            className={styles.imgLogoNav}
          />
        </Link>
        <div className="d-flex align-items-center">
          <Form>
            <Input
              name="search"
              type="search"
              className={styles.input}
              placeholder="Pesquise..."
            />
          </Form>
          <img
            src="/homeAuth/iconSearch.svg"
            alt="LupaHeader"
            className={styles.searchImg}
          />
          <p className={styles.userProfile} onClick={handleModal}>
            AB
          </p>
        </div>
        <Modal
          isOpen={modalOpen}
          onRequestClose={handleModal}
          shouldCloseOnEsc={true}
          className={styles.modal}
          overlayClassName={styles.overlayModal}
        >
          <Link className={styles.modalLink} href="/profile">
            <p>Meus Dados</p>
          </Link>
          <p className={styles.modalLink} onClick={handleLogout}>
            Sair
          </p>
        </Modal>
      </Container>
    </>
  );
};

export default HeaderAuth;

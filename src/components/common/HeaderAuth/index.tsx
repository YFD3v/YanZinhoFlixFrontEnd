"use client";
import Modal from "react-modal";
import { Container, Form, Input } from "reactstrap";
import styles from "./styles.module.scss";
import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import profileService from "@/services/profileService";

const HeaderAuth = () => {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState(false);
  const [initials, setInitials] = useState("");

  const [searchName, setSearchName] = useState("");
  const handleSearch = async (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    router.push(`search?name=${searchName}`);
    setSearchName("");
  };

  const handleSearchClick = () => {
    router.push(`search?name=${searchName}`);
    setSearchName("");
  };

  useEffect(() => {
    profileService.fetchCurrent().then(({ firstName, lastName }) => {
      const firstInitial = firstName.slice(0, 1);
      const lastInitial = lastName.slice(0, 1);
      setInitials(`${firstInitial}${lastInitial}`);
    });
  }, []);

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
          <Form onSubmit={handleSearch}>
            <Input
              name="search"
              type="search"
              className={styles.input}
              placeholder="Pesquise..."
              value={searchName}
              onChange={(ev) =>
                setSearchName(ev.currentTarget.value.toLowerCase())
              }
            />
          </Form>
          <img
            src="/homeAuth/iconSearch.svg"
            alt="LupaHeader"
            className={styles.searchImg}
            onClick={handleSearchClick}
          />
          <p className={styles.userProfile} onClick={handleModal}>
            {initials}
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

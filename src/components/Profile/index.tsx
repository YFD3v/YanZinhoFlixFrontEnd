"use client";
//Passo 25 - estrutura do profile
import { Button, Col, Container, Row } from "reactstrap";
import styles from "./styles.module.scss";
import UserForm from "./UserForm";
import { useState } from "react";
import PasswordForm from "./Password";

const ProfileContainer = () => {
  const [form, setForm] = useState("");

  return (
    <>
      <Container>
        <p className={styles.title}>Minha Conta</p>
        <Row className="pt-3 pb-5">
          <Col className={styles.btnColumn} md={4}>
            <Button
              className={styles.renderForm}
              style={{ color: form === "userForm" ? "#FF0044" : "white" }}
              onClick={() => setForm("userForm")}
            >
              DADOS PESSOAIS
            </Button>
            <Button
              style={{ color: form === "passwordForm" ? "#FF0044" : "white" }}
              onClick={() => setForm("passwordForm")}
              className={styles.renderForm}
            >
              SENHA
            </Button>
          </Col>
          <Col md>{form === "userForm" ? <UserForm /> : <PasswordForm />}</Col>
        </Row>
      </Container>
    </>
  );
};

export default ProfileContainer;

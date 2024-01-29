"use client";
//Passo 25 - estrutura do profile
import { Button, Col, Container, Row } from "reactstrap";
import styles from "./styles.module.scss";
import UserForm from "./UserForm";

const ProfileContainer = () => {
  return (
    <>
      <Container>
        <p className={styles.title}>Minha Conta</p>
        <Row className="pt-3 pb-5">
          <Col className={styles.btnColumn} md={4}>
            <Button className={styles.renderForm}>DADOS PESSOAIS</Button>
            <Button className={styles.renderForm}>SENHA</Button>
          </Col>
          <Col md>
            <UserForm />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProfileContainer;

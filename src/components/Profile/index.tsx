"use client";
import { Button, Col, Container, Row } from "reactstrap";
import styles from "./styles.module.scss";
import UserForm from "./UserForm";
import { useEffect, useState } from "react";
import PasswordForm from "./PasswordForm";
import { useRouter } from "next/navigation";
import PageSpinner from "../common/Spinner";

const ProfileContainer = () => {
  const [form, setForm] = useState("");
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!sessionStorage.getItem("yanzinhoflix-token")) {
      router.push("/login");
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) return <PageSpinner />;

  return (
    <div className={form === "passwordForm" ? styles.formPassword : ""}>
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
    </div>
  );
};

export default ProfileContainer;

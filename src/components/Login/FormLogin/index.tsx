"use client";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import styles from "./styles.module.scss";
import Footer from "@/components/common/Footer";

//Passo 17 - Estrutura da pagina de login

const FormLogin = () => {
  return (
    <>
      <Container className={`${styles.container} py-5`}>
        <p className={styles.formTitle}>Bem vindo(a) de volta!</p>
        <Form className={styles.form}>
          <p className="text-center">
            <strong>Faça o login!</strong>
          </p>
          <FormGroup>
            <Label for="email" className={styles.label}>
              E-MAIL
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Seu e-mail..."
              required
              className={styles.input}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label for="password" className={styles.label}>
              SENHA
            </Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Sua senha..."
              required
              className={styles.input}
            ></Input>
          </FormGroup>
          <Button outline className={styles.formBtn}>
            ENTRAR
          </Button>
        </Form>
      </Container>
      <Footer />
    </>
  );
};

export default FormLogin;

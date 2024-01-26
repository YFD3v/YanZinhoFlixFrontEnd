"use client";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import styles from "./styles.module.scss";
import Footer from "@/components/common/Footer";
//Passo 15 - Criandoo  formulário de registro
const FormRegister = () => {
  return (
    <>
      <Container className="py-5">
        <p className={styles.formTitle}>Bem-vindo(a) ao YanZinhoFlix</p>
        <Form className={styles.form}>
          <p className="text-center">
            <strong>Faça a sua conta!</strong>
          </p>

          <FormGroup>
            <Label for="firstName" className={styles.label}>
              NOME
            </Label>

            <Input
              id="firstName"
              name="firstName"
              type="text"
              placeholder="Seu nome..."
              required
              maxLength={20}
              className={styles.inputName}
            />
          </FormGroup>

          <FormGroup>
            <Label for="lastName" className={styles.label}>
              SOBRENOME
            </Label>

            <Input
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Seu sobrenome..."
              required
              maxLength={20}
              className={styles.inputName}
            />
          </FormGroup>
          <FormGroup>
            <Label for="phone" className={styles.label}>
              WHATSAPP / TELEGRAM
            </Label>

            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="(xx) 9xxxx-xxxx"
              data-mask="[-]+55 (00) 000000-0000"
              required
              className={styles.input}
            />
          </FormGroup>
          <FormGroup>
            <Label for="email" className={styles.label}>
              E-MAIL
            </Label>

            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Seu e-mail"
              required
              className={styles.input}
            />
          </FormGroup>
          <FormGroup>
            <Label for="birth" className={styles.label}>
              DATA DE NASCIMENTO
            </Label>

            <Input
              id="birth"
              name="birth"
              type="date"
              min="1930-01-01"
              max="2020-01-01"
              required
              className={styles.input}
            />
          </FormGroup>
          <FormGroup>
            <Label for="confPassword" className={styles.label}>
              SENHA
            </Label>

            <Input
              id="confPassword"
              name="confPassword"
              type="password"
              placeholder="Sua senha... (Min: 6 dígitos)"
              minLength={6}
              required
              className={styles.input}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password" className={styles.label}>
              CONFIRME SUA SENHA
            </Label>

            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Confirme sua senha"
              minLength={6}
              required
              className={styles.input}
            />
          </FormGroup>
          <Button type="submit" outline className={styles.formBtn}>
            CADASTRAR
          </Button>
        </Form>
      </Container>
      <Footer />
      <script src="https://jsuites.net/v4/jsuites.js"></script>
    </>
  );
};
export default FormRegister;

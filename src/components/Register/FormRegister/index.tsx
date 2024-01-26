"use client";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import styles from "./styles.module.scss";
import Footer from "@/components/common/Footer";
import { FormEvent, useState } from "react";
import authService from "@/services/authService";
import { useRouter } from "next/navigation";
import ToastComponent from "@/components/common/Toast";

//Passo 15 - Criandoo  formulário de registro
const FormRegister = () => {
  //Passo 16 - Conectando o backend com o registro
  const router = useRouter();
  const [toastIsOpen, setToastIsOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const handleRegister = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const firstName = formData.get("firstName")!.toString();
    const lastName = formData.get("lastName")!.toString();
    const phone = formData.get("phone")!.toString();
    const birth = formData.get("birth")!.toString();
    const email = formData.get("email")!.toString();
    const password = formData.get("password")!.toString();
    const confPassword = formData.get("confPassword")!.toString();
    const params = { firstName, lastName, phone, birth, email, password };
    if (password != confPassword) {
      setToastIsOpen(true);
      setTimeout(() => {
        setToastIsOpen(false);
      }, 1000 * 3);
      setToastMessage("As senhas dos campos não coincidem!");
      return;
    }

    const { data, status } = await authService.register(params);
    if (status === 201) {
      //Importante esse registred=true para a utilização do toast na pagina de login
      router.push("/login?registred=true");
    } else {
      setToastIsOpen(true);
      setTimeout(() => {
        setToastIsOpen(false);
      }, 1000 * 3);
      setToastMessage(`Houve um erro: ${data.message}`);
    }
  };
  return (
    <>
      <Container className="py-5">
        <p className={styles.formTitle}>Bem-vindo(a) ao YanZinhoFlix</p>
        <Form onSubmit={handleRegister} className={styles.form}>
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
      <ToastComponent
        color="bg-danger"
        isOpen={toastIsOpen}
        message={toastMessage}
      />
      <script src="https://jsuites.net/v4/jsuites.js"></script>
    </>
  );
};
export default FormRegister;

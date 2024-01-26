"use client";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import styles from "./styles.module.scss";
import Footer from "@/components/common/Footer";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import ToastComponent from "@/components/common/Toast";
import authService from "@/services/authService";

//Passo 17 - Estrutura da pagina de login

const FormLogin = () => {
  //Passo 18 - conexão do backend para login
  const router = useRouter();
  const [toast, setToast] = useState({ isOpen: false, color: "", message: "" });

  //Pegando o parametro da query registred que vem da pagina de registro
  const query = useSearchParams();
  const registerSuccess = query.get("registred");
  console.log(query.values);

  useEffect(() => {
    if (registerSuccess === "true") {
      setToast({
        message: "Cadastro realizado com sucesso!",
        isOpen: true,
        color: "bg-success",
      });
      setTimeout(() => {
        setToast({ ...toast, isOpen: false });
      }, 1000 * 3);
    }
  }, [registerSuccess]);

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email")!.toString();
    const password = formData.get("password")!.toString();
    const params = { email, password };

    const { status } = await authService.login(params);
    if (status === 200) {
      router.push("/home");
    } else {
      setToast({
        message: "E-mail ou senha incorretos!",
        isOpen: true,
        color: "bg-danger",
      });
      setTimeout(() => {
        setToast({ ...toast, isOpen: false });
      }, 1000 * 3);
    }
  };

  return (
    <>
      <Container className={`${styles.container} py-5`}>
        <p className={styles.formTitle}>Bem vindo(a) de volta!</p>
        <Form onSubmit={handleLogin} className={styles.form}>
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
          <Button type="submit" outline className={styles.formBtn}>
            ENTRAR
          </Button>
        </Form>
      </Container>
      <ToastComponent
        color={toast.color}
        isOpen={toast.isOpen}
        message={toast.message}
      />
      <Footer />
    </>
  );
};

export default FormLogin;

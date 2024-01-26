import HeaderGeneric from "@/components/common/HeaderGeneric";
import { Metadata } from "next";
import styles from "./styles.module.scss";
import FormLogin from "@/components/Login/FormLogin";

//Passo 17 - Estrutura pagina de login

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000/login"),
  title: "YanZinhoFlix - Login",
  description: "Faça o login em YanZinhoFlix",
  openGraph: {
    title: "YanZinhoFlix - Login",
    description: "Faça o login em YanZinhoFlix",
  },
};

const Login = () => {
  return (
    <div className={styles.container}>
      <HeaderGeneric btnContent="Cadastre-se" btnUrl="/register" logoUrl="/" />
      <FormLogin />
    </div>
  );
};

export default Login;

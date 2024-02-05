import HeaderGeneric from "@/components/common/HeaderGeneric";
import { Metadata } from "next";
import styles from "./login.module.scss";
import FormLogin from "@/components/Login/FormLogin";
import { Suspense } from "react";

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
    <Suspense>
      <div className={styles.container}>
        <HeaderGeneric
          btnContent="Cadastre-se"
          btnUrl="/register"
          logoUrl="/"
        />
        <FormLogin />
      </div>
    </Suspense>
  );
};

export default Login;

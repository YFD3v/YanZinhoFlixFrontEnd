import { Metadata } from "next";
import styles from "./register.module.scss";
import HeaderGeneric from "@/components/common/HeaderGeneric";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000/register"),
  title: "YanZinhoFlix - Registro",
  //Passo 3 - configurando pastas e components
  icons: {
    icon: "/favicon.svg",
  },
  description: "Faça o seu cadastro em YanZinhoFlix",
  openGraph: {
    title: "YanZinhoFlix - Registro",
    description: "Faça o seu cadastro em YanZinhoFlix",
  },
};

const Register = () => {
  return (
    <>
      <HeaderGeneric btnContent="Faça login" logoUrl="/" btnUrl="/login" />
    </>
  );
};

export default Register;

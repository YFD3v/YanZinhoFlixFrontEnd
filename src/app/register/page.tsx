import { Metadata } from "next";
import styles from "./register.module.scss";
import HeaderGeneric from "@/components/common/HeaderGeneric";
import FormRegister from "@/components/Register/FormRegister";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000/register"),
  title: "YanZinhoFlix - Registro",
  description: "Faça o seu cadastro em YanZinhoFlix",
  openGraph: {
    title: "YanZinhoFlix - Registro",
    description: "Faça o seu cadastro em YanZinhoFlix",
  },
};

const Register = () => {
  return (
    <div className={styles.container}>
      <HeaderGeneric btnContent="Faça login" logoUrl="/" btnUrl="/login" />
      <FormRegister />
    </div>
  );
};

export default Register;

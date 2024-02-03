import { Metadata } from "next";
import styles from "./login.module.scss";
import ContainerHomeAuth from "@/components/HomeAuth";
import HeaderAuth from "@/components/common/HeaderAuth";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000/register"),
  title: "YanZinhoFlix - Home",
  description: "Assista à milhares das melhores aulas do mundo",
  openGraph: {
    title: "YanZinhoFlix - Home",
    description: "Assista a milhares das melhores aulas do mundo",
  },
};

const HomeAuth = () => {
  return (
    <>
      <ContainerHomeAuth />
    </>
  );
};

export default HomeAuth;

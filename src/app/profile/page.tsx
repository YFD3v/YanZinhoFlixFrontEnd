import { Metadata } from "next";
import styles from "./profile.module.scss";
import ProfileContainer from "@/components/Profile";
import Footer from "@/components/common/Footer";
import HeaderAuth from "@/components/common/HeaderAuth";
//Passo 25 - estrutura do profile
export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000/login"),
  title: "YanZinhoFlix - Meus dados",
  description: "Faça alterações nos seus dados",
  openGraph: {
    title: "Meus dados",
    description: "Faça alterações nos seus dados",
  },
};

const Profile = () => {
  return (
    <>
      <div className={styles.header}>
        <HeaderAuth />
      </div>
      <ProfileContainer />
      <div className={styles.footer}>
        <Footer />
      </div>
    </>
  );
};

export default Profile;

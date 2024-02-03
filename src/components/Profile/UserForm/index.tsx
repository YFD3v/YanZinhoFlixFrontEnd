import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import styles from "../styles.module.scss";
import { FormEvent, useEffect, useState } from "react";
import profileService from "@/services/profileService";
import ToastComponent from "@/components/common/Toast";
import { useRouter } from "next/navigation";
const UserForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    createdAt: "",
  });

  const [toast, setToast] = useState({
    isOpen: false,
    color: "",
    errorMessage: "",
  });

  const router = useRouter();
  const [initialEmail, setInitialEmail] = useState("");

  const date = new Date(formData.createdAt);
  const month = date.toLocaleDateString("default", { month: "long" });

  useEffect(() => {
    profileService
      .fetchCurrent()
      .then(({ firstName, lastName, phone, email, createdAt }) => {
        setFormData({
          firstName,
          lastName,
          phone,
          email,
          createdAt,
        });
      });
    setInitialEmail(formData.email);
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const res = await profileService.userUpdate(formData);

    if (res === 200) {
      setToast({
        isOpen: true,
        errorMessage: "Informações alteradas com sucesso!",
        color: "bg-success",
      });
      setTimeout(() => setToast({ ...toast, isOpen: false }), 1000 * 3);
      if (formData.email != initialEmail) {
        /*
          NO back-end definimos que o e-mail é unico, e ao alteramos esse e-mail. Aquela conta deixa de existir, então se eu não fizer o redireicionamento e deixar o usuário voltar para home, irá da um erro. Por isso limpamos o token e direcionamos ele para homeNoAuth
        */
        sessionStorage.clear();
        router.push("/");
      }
    } else {
      setToast({
        isOpen: true,
        errorMessage: "Você não pode mudar para esse e-mail",
        color: "bg-danger",
      });
      setTimeout(() => setToast({ ...toast, isOpen: false }), 1000 * 3);
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formName}>
          <p className={styles.nameAbbreviation}>
            {formData.firstName.slice(0, 1)}
            {formData.lastName.slice(0, 1)}
          </p>
          <p
            className={styles.userName}
          >{`${formData.firstName} ${formData.lastName}`}</p>
        </div>
        <div className={styles.memberTime}>
          <img
            className={styles.memberTimeImg}
            src="/profile/iconUserAccount.svg"
            alt="iconProfile"
          />
          <p className={styles.memberText}>
            Membro desde: <br />{" "}
            {`${date.getDay()} de ${month} de
            ${date.getFullYear()}`}
          </p>
        </div>
        <hr />
        <div className={styles.inputFlexDiv}>
          <FormGroup>
            <Label className={styles.label} for="firstName">
              NOME:
            </Label>
            <Input
              name="firstName"
              type="text"
              id="firstName"
              placeholder="Seu primeiro nome..."
              required
              maxLength={20}
              className={styles.inputFlex}
              value={formData.firstName}
              onChange={(event) =>
                setFormData({ ...formData, firstName: event.target.value })
              }
            />
          </FormGroup>
          <FormGroup>
            <Label className={styles.label} for="lasttName">
              SOBRENOME:
            </Label>
            <Input
              name="lasttName"
              type="text"
              id="lasttName"
              placeholder="Seu sobrenome..."
              required
              maxLength={20}
              className={styles.inputFlex}
              value={formData.lastName}
              onChange={(event) =>
                setFormData({ ...formData, lastName: event.target.value })
              }
            />
          </FormGroup>
        </div>
        <div className={styles.inputNormalDiv}>
          <FormGroup>
            <Label className={styles.label} for="phone">
              WHATSAPP / TELEGRAM
            </Label>
            <Input
              name="phone"
              type="tel"
              id="phone"
              placeholder="(xx) 9xxxx-xxxx"
              required
              className={styles.input}
              value={formData.phone}
              onChange={(event) =>
                setFormData({ ...formData, phone: event.target.value })
              }
            />
          </FormGroup>
          <FormGroup>
            <Label className={styles.label} for="email">
              E-MAIL:
            </Label>
            <Input
              name="email"
              type="email"
              id="email"
              placeholder="Seu e-mail.."
              required
              maxLength={20}
              className={styles.input}
              value={formData.email}
              onChange={(event) =>
                setFormData({ ...formData, email: event.target.value })
              }
            />
          </FormGroup>
          <Button type="submit" className={styles.formBtn} outline>
            Salvar alterações
          </Button>
        </div>
      </Form>
      <ToastComponent
        color={toast.color}
        isOpen={toast.isOpen}
        message={toast.errorMessage}
      />
    </>
  );
};

export default UserForm;

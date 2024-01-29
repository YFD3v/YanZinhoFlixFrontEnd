import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import styles from "../styles.module.scss";
import { FormEvent, useEffect, useState } from "react";
import profileService from "@/services/profileService";
import ToastComponent from "@/components/common/Toast";
//Passo 27 - criando a estrutura do form de senha
const PasswordForm = () => {
  //Passo 28 - conexão com o backend do usuário em relação à senha
  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const [toast, setToast] = useState({
    isOpen: false,
    color: "",
    errorMessage: "",
  });

  useEffect(() => {
    profileService.fetchCurrent().then((password) => {
      setPasswords({
        ...passwords,
        currentPassword: password.currentPassword,
        newPassword: password.newPassword,
      });
    });
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (passwords.newPassword != passwords.confirmNewPassword) {
      setToast({
        isOpen: true,
        errorMessage: "Senha e confirmação de senha diferentes!",
        color: "bg-danger",
      });
      setTimeout(() => setToast({ ...toast, isOpen: false }), 1000 * 3);
      return;
    }

    if (passwords.currentPassword === passwords.newPassword) {
      setToast({
        isOpen: true,
        errorMessage: "Não coloque a mesma senha!",
        color: "bg-danger",
      });
      setTimeout(() => setToast({ ...toast, isOpen: false }), 1000 * 3);
      return;
    }

    const res = await profileService.passwordUpdate({
      currentPassword: passwords.currentPassword,
      newPassword: passwords.newPassword,
    });

    if (res === 204) {
      setToast({
        isOpen: true,
        errorMessage: "Senha alterada com sucesso!",
        color: "bg-success",
      });
      setTimeout(() => setToast({ ...toast, isOpen: false }), 1000 * 3);
      setPasswords({
        currentPassword: "",
        newPassword: "",
        confirmNewPassword: "",
      });
    }

    if (res === 400) {
      setToast({
        isOpen: true,
        errorMessage: "Senha atual incorreta!",
        color: "bg-danger",
      });
      setTimeout(() => setToast({ ...toast, isOpen: false }), 1000 * 3);
    }
  };

  //Fim passo 28

  return (
    <div>
      <Form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputNormalDiv}>
          <FormGroup>
            <Label className={styles.label} for="currentPassword">
              SENHA ATUAL:
            </Label>
            <Input
              name="currentPassword"
              type="password"
              id="currentPassword"
              placeholder="********"
              required
              minLength={6}
              maxLength={12}
              value={passwords.currentPassword}
              onChange={(ev) =>
                setPasswords({
                  ...passwords,
                  currentPassword: ev.currentTarget.value,
                })
              }
              className={styles.input}
            />
          </FormGroup>
        </div>
        <div className={styles.inputFlexDiv}>
          <FormGroup>
            <Label className={styles.label} for="newPassword">
              NOVA SENHA:
            </Label>
            <Input
              name="newPassword"
              id="newPassword"
              type="password"
              placeholder="********"
              required
              minLength={6}
              maxLength={12}
              className={styles.inputFlex}
              value={passwords.newPassword}
              onChange={(ev) =>
                setPasswords({
                  ...passwords,
                  newPassword: ev.currentTarget.value,
                })
              }
            />
          </FormGroup>
          <FormGroup>
            <Label className={styles.label} for="confNewPassword">
              CONFIRMAR NOVA SENHA:
            </Label>
            <Input
              name="confNewPassword"
              id="confNewPassword"
              type="password"
              placeholder="********"
              required
              minLength={6}
              maxLength={12}
              className={styles.inputFlex}
              value={passwords.confirmNewPassword}
              onChange={(ev) =>
                setPasswords({
                  ...passwords,
                  confirmNewPassword: ev.currentTarget.value,
                })
              }
            />
          </FormGroup>
        </div>
        <Button outline className={styles.formBtn} type="submit">
          Salvar Alterações
        </Button>
      </Form>
      <ToastComponent
        color={toast.color}
        isOpen={toast.isOpen}
        message={toast.errorMessage}
      />
    </div>
  );
};

export default PasswordForm;

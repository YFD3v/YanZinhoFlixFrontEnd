import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import styles from "../styles.module.scss";
//Passo 27 - criando a estrutura do form de senha
const PasswordForm = () => {
  return (
    <>
      <Form className={styles.form}>
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
            />
          </FormGroup>
        </div>
        <Button outline className={styles.formBtn} type="submit">
          Salvar Alterações
        </Button>
      </Form>
    </>
  );
};

export default PasswordForm;

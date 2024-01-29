import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import styles from "../styles.module.scss";
//Passo 25 - estrutura do profile
const UserForm = () => {
  return (
    <>
      <Form className={styles.form}>
        <div className={styles.formName}>
          <p className={styles.nameAbbreviation}>NT</p>
          <p className={styles.userName}>NAME TEST</p>
        </div>
        <div className={styles.memberTime}>
          <img
            className={styles.memberTimeImg}
            src="/profile/iconUserAccount.svg"
            alt="iconProfile"
          />
          <p className={styles.memberText}>
            Membro desde: <br /> 20 de abril de 2020
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
              value={"Name"}
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
              value={"Test"}
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
              value={"+55 (71) 99999-9999"}
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
              value={"teste@gmail.com"}
            />
          </FormGroup>
          <Button type="submit" className={styles.formBtn} outline>
            Salvar alterações
          </Button>
        </div>
      </Form>
    </>
  );
};

export default UserForm;

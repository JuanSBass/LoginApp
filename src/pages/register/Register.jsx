import { Button, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import styles from "./register.module.css";
import logo from "../../img/Aos logo.png";

const Register = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    username: "",
  });

  return (
    <div className={styles.card}>
      <form className="flex flex-col gap-4">
        <img src={logo} alt="logo" className={styles.logo} />
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Email" className={styles.title} />
          </div>
          <TextInput
            id="email"
            type="email"
            placeholder="ejemplo@email.com"
            required={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="password1"
              value="Contraseña"
              className={styles.title}
            />
          </div>
          <TextInput id="password" type="password" required={true} />
        </div>
        <Button outline={true} gradientDuoTone="redToYellow" type="submite">
          Registrarse
        </Button>
      </form>
    </div>
  );
};

export default Register;

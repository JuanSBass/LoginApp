import styles from "./login.module.css";
import { Button, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import logo from "../../img/Aos logo.png";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/actions";

export const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const users = useSelector((state) => state.users);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  console.log(users);

  const validate = (input) => {
    const errors = {};
    let isAuth = false;
    users?.forEach((user) => {
      if (Object.values(user).includes(input.email)) isAuth = true
      if (user.email === input.email && user.password !== input.password)
      errors.password = "contraseña incorrecta";
    });
    if (!isAuth) errors.email = "email no registrado"
    if (!input.email) errors.email = "Debe ingresar un email";
    else if (!input.password) errors.password = "Debe ingresar un password";

    return errors;
  };

  let btnDisabled = !(
    input.email.length &&
    input.password.length &&
    !errors.hasOwnProperty("email") &&
    !errors.hasOwnProperty("password")
  );

  const handleChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
    setErrors(
      validate({
        ...input,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(login(input));
    navigate(`/home/${input.email}`);
  };

  return (
    <div className={styles.card}>
      <form className="flex flex-col gap-4">
        <img src={logo} alt="logo" className={styles.logo} />
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Email" className={styles.title} />
          </div>
          <TextInput
            autoComplete="off"
            type="email"
            placeholder="ejemplo@email.com"
            required={true}
            onChange={(e) => handleChange(e)}
            name="email"
            value={input.email}
          />
          {errors?.email && (
            <div className={styles.errores}>{errors.email}</div>
          )}
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="password1"
              value="Contraseña"
              className={styles.title}
            />
          </div>
          <TextInput
            id="password"
            type="password"
            required={true}
            onChange={(e) => handleChange(e)}
            name="password"
            value={input.password}
          />
          {errors?.password && (
            <div className={styles.errores}>{errors.password}</div>
          )}
        </div>
        <Button
          outline={true}
          gradientDuoTone="redToYellow"
          type="submite"
          onClick={handleSubmit}
          disabled={btnDisabled}
        >
          Entrar
        </Button>
      </form>
    </div>
  );
};

import { Button, Label, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import styles from "./register.module.css";
import logo from "../../img/Aos logo.png";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/actions";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const users = useSelector((state) => state.users);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validate = (input) => {
    const errors = {};
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    users?.forEach(({ email }) => {
      if (email === input.email) errors.email = "El email se encuentra registrado";
    });
    if (!input.email) errors.email = "Debe ingresar un email";
    else if (!input.password) errors.password = "Debe ingresar un password";
    else if (!input.email.match(mailFormat)) errors.email = "Ingrese un email correcto";
    else if (!input.password.match(/(?=.*[A-Z])/)) errors.password = "Debe contener al menos una mayúscula";
    else if (!input.password.match(/(?=.*[0-9])/)) errors.password = "Debe contener al menos un número";
    else if (!input.password.match(/(?=.{8,12})/)) errors.password = "Debe contener entre 8 y 12 caracteres"

    return errors;
  };

  let btnDisabled = !(
    input.email.length && input.password.length && !errors.hasOwnProperty("email") && !errors.hasOwnProperty("password")
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
    dispatch(register(input));
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
          Registrarse
        </Button>
      </form>
    </div>
  );
};

export default Register;

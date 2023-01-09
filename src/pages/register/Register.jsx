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
  console.log(users);

  const validate = (input) => {
    const errors = {};
    users?.forEach(({ email }) => {
      if (email === input.email) errors.email = "El email ya existe";
    });
  };

  const handleChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
    setErrors(
      validate({
        ...input,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(register(input));
    navigate(`/home/${input.email}`);
  };

  console.log(input);

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
        </div>
        <Button
          outline={true}
          gradientDuoTone="redToYellow"
          type="submite"
          onClick={handleSubmit}
        >
          Registrarse
        </Button>
      </form>
    </div>
  );
};

export default Register;

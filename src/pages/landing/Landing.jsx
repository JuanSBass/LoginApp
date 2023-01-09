import { Button } from "flowbite-react";
import { HiTable } from "react-icons/hi";
import { BiLogIn } from "react-icons/bi"
import { Link } from "react-router-dom";
import styles from "./landing.module.css";

const Landing = () => {
  return (
    <div className={styles.card}>
      <main>
        <h1 className={styles.title}>
          ¡Bienvenidx! <br /> <p>Selecciona una opción</p>
        </h1>
        <div>
          <Link to="/register">
            <Button color="dark">
              Registrarse
              <HiTable className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
        <div>
          <Link to="/login">
            <Button color="dark">
              <BiLogIn className="mr-2 h-5 w-5" />
              Entrar
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Landing;

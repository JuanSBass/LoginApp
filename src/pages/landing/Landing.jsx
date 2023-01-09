import { Button } from "flowbite-react";
import { HiLogin, HiTable } from "react-icons/hi";
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
          <Button color="dark">
            <HiLogin className="mr-2 h-5 w-5" />
            Entrar
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Landing;

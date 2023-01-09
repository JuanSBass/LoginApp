import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "flowbite-react";
import { HiHome, HiShieldExclamation, HiUserCircle } from "react-icons/hi";
import { useSelector } from "react-redux";
import styles from "./navbar.module.css"

const Navbar = () => {
  const { admin } = useSelector(state => state.user);
  const { email } = useParams();
  console.log(email);
  return (
    <nav className={styles.container}>
      <Button.Group outline={true}>
        <Button gradientDuoTone="cyanToBlue">
          <Link to={`/home/${email}`}>
            <HiUserCircle className="mr-3 h-4 w-4" /> Perfil
          </Link>
        </Button>
        <Button gradientDuoTone="cyanToBlue">
          <Link to="/">
            <HiHome className="mr-3 h-4 w-4" /> Salir
          </Link>
        </Button>

        { admin ? <Button gradientDuoTone="cyanToBlue">
          <Link to="/admin">
            <HiShieldExclamation className="mr-3 h-4 w-4" /> Admin
          </Link>
        </Button> : <></>}

        
      </Button.Group>
    </nav>
  );
};

export default Navbar;

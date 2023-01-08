import React from "react";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
import { HiHome, HiShieldExclamation, HiUserCircle } from "react-icons/hi";

const Navbar = () => {
  return (
    <nav>
      <Button.Group outline={true}>
        <Button gradientDuoTone="cyanToBlue">
          <Link to="/dashboard">
            <HiUserCircle className="mr-3 h-4 w-4" /> Perfil
          </Link>
        </Button>
        <Button gradientDuoTone="cyanToBlue">
          <Link to="/home">
            <HiHome className="mr-3 h-4 w-4" /> Home
          </Link>
        </Button>
        <Button gradientDuoTone="cyanToBlue">
          <Link to="/admin">
            <HiShieldExclamation className="mr-3 h-4 w-4" /> Admin
          </Link>
        </Button>
      </Button.Group>
    </nav>
  );
};

export default Navbar;

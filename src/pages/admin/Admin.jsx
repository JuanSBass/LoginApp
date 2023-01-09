import { Button, Table } from "flowbite-react";
import { useSelector } from "react-redux";
import { MdDeleteForever, MdExitToApp } from "react-icons/md";
import { Link } from "react-router-dom";

const Admin = () => {
  let users = useSelector((state) => state.users);
  return (
    <div>
      <h1>Hola Admin!</h1>
      <Table hoverable={true}>
        <Table.Head>
          <Table.HeadCell>Usuario email</Table.HeadCell>
          <Table.HeadCell>Usuario password</Table.HeadCell>
          <Table.HeadCell>Gestion de usuario</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {users.map(({ email, password }) => (
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {email}
              </Table.Cell>
              <Table.Cell>{password}</Table.Cell>
              <Table.Cell>
                <Button color="failure">
                  <MdDeleteForever className="mr-2 h-5 w-5" />
                  Eliminar
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <Link to="/">
        <Button color="dark">
          <MdExitToApp className="mr-2 h-5 w-5" />
          Salir
        </Button>
      </Link>
    </div>
  );
};

export default Admin;

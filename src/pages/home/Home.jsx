import { Avatar } from 'flowbite-react';
import { useParams } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'

const Home = () => {
  let { email } = useParams();
  console.log(email);
  fetch('https://api.thecatapi.com/v1/images/search')
  .then(response => response.json())
  .then(data => {document.querySelector("img").src = data[0].url})
  let person = email.split('@')[0];
  return (
    <div>
      <Navbar />
      <h1>Hola {person}</h1>
      <Avatar
      img="cat"
      bordered={true}
      color="gray"
      size="xl"
    />
    </div>
  )
}

export default Home

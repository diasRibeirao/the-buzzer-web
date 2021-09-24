import * as React from 'react';
import logobuser from './buser.png';
import { button, div} from "./styles";
import { Link } from 'react-router-dom';
import { Container } from "./styles";
import './styles.css';
import Button from '@restart/ui/esm/Button';



function Home() {
  return (
    <><div className='home'>
      <h1>Login</h1>
    </div><div className='footers'>
        <img src={logobuser} />
        <div className='buttons'>
        <Button className='btnLogin'to="/Login">Login</Button>
        <Button className='btnCadastrar' to="/Cadastrar">Cadastrar</Button>
        </div>
      </div></>

  );
}

export default Home;
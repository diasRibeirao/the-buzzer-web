import * as React from 'react';
import logobuser from './buser.png';
import {img, button, div} from "./styles";
import { Link } from 'react-router-dom';
import { Container } from "./styles";

function Home() {
  return (
    <><div className='home'>
      <h1>Login</h1>
    </div><div className='footers'>
        <img src={logobuser} />
        <div className='buttons'>
        <Link className='btn btn-primary log'to="/Login">Login</Link>
        <Link className='btn btn-primary cad' to="/Cadastrar">Cadastrar</Link>
        </div>
      </div></>

  );
}

export default Home;
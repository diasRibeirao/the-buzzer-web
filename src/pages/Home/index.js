import * as React from 'react';
import logobuser from './buser.png';
import { button, div} from "./styles";
import { Link } from 'react-router-dom';
import { Container } from "./styles";
import './styles.css';
import Button from '@restart/ui/esm/Button';
import { useHistory } from "react-router-dom"; 


function Home() {
  const history = useHistory();
  const handleNavigateToLogin = () => history.push("/login");
  const handleNavigateToCadatrar = () => history.push("/cadastro");
  return (
    <><div className='home'>
      <h1>Login</h1>
    </div><div className='footers'>
        <img src={logobuser} />
        <div className='buttons'>
        <Button className='btnLogin' onClick={handleNavigateToLogin}>Login</Button>
        <Button className='btnCadastrar' onClick={handleNavigateToCadatrar}>Cadastrar</Button>
        </div>
      </div></>

  );
}


export default Home;
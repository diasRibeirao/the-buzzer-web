import React from 'react';
import facebook from './facebook.png';
import google from './google.png';
import { Link } from 'react-router-dom';
import Button from '@restart/ui/esm/Button';
import './styles.css';
import { useHistory } from "react-router-dom"; 

function Login() {
  const history = useHistory();
  const handleNavigateToDirect = () => history.push("/direct");
  return (
    <><div className='home'>
      <h1>Login</h1>
    </div><div className='footers'>


    <form >
      <div> 
     <label >E-mail</label> </div>
     <div><input name="email" /> </div>
     <div> <label>Senha</label></div>
     <div> <input name="senha" /></div>
     <div> <Link to="/esqueceu">esqueci minha senha</Link></div>
      
   </form>
 
        <img className='btnLogin' src={facebook} ></img>
        <img className='btnCadastrar' src={google} ></img>
        <div>
        <Button className='btnLoginRealizar' onClick={handleNavigateToDirect}>Realizar Login</Button>
        </div>
        
      </div>
      
      </>

  );
}

export default Login;
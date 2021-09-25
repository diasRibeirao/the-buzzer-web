import React from 'react';
import './styles.css';
import Button from '@restart/ui/esm/Button';
import { useHistory } from "react-router-dom"; 

function EsqueceuSenha() {
  const history = useHistory();
  const handleNavigateToDirect = () => history.push("/");
  return (
    <><div className='home'>
      <h4>Por favor, informe abaixo seu e-mail de cadastro.</h4>
    </div><div className='footers'>
    <form>
     <label>E-mail</label>
     <div><input name="senha"/></div>    
     <Button className='btnLoginRealizar' onClick={handleNavigateToDirect}>Enviar</Button>
       
   </form>

      </div></>

  );
}

export default EsqueceuSenha;
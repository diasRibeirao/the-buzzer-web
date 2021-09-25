import React from 'react';
import './styles.css';
import Button from '@restart/ui/esm/Button';
import './styles.css';
import { useHistory } from "react-router-dom"; 

function Cadastro() {
  const history = useHistory();
  const handleNavigateToDirect = () => history.push("/");
  return (
    <><div className='home'>
      <h1>Cadastro</h1>
    </div><div className='footers'>
    <form >
      <div>
     <label>Nome</label> </div>
     <div>
     <input name="nome"  /> </div>
     <div> <label>E-mail</label> </div>
     <div> <input name="senha"  /> </div>    
     <div>  <label>Confirmação E-mail</label> </div>
     <div> <input name="nome" /> </div>
     <label>Senha</label>
     <div> <input name="senha"  /> </div>
     <div> <label>Confirmar Senha</label> </div>
     <div><input name="nome" /> </div>
     <Button className='btnLoginRealizar' onClick={handleNavigateToDirect}>Realizar Cadastro</Button>
       
   </form>

      </div></>

  );
}

export default Cadastro;
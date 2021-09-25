import React from 'react';

function Cadastro() {
  return (
    <><div className='home'>
      <h1>Cadastro</h1>
    </div><div className='footers'>
    <form >
     <label>Nome</label>
     <input name="nome"  />
     <label>E-mail</label>
     <input name="senha"  />    
     <label>Confirmação E-mail</label>
     <input name="nome" />
     <label>Senha</label>
     <input name="senha"  />
     <label>Confirmar Senha</label>
     <input name="nome" />
     <input type="submit"  /> 
   </form>

      </div></>

  );
}

export default Cadastro;
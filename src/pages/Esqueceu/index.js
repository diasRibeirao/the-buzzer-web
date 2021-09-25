import React from 'react';

function EsqueceuSenha() {
  return (
    <><div className='home'>
      <h1>Por favor, informe abaixo seu e-mail de cadastro.</h1>
    </div><div className='footers'>
    <form>
     <label>E-mail</label>
     <input name="senha"/>    
     <input type="submit"  /> 
   </form>

      </div></>

  );
}

export default EsqueceuSenha;
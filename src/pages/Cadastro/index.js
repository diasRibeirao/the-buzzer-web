import React from 'react';

function Cadastro() {
  return (
    <><div className='home'>
      <h1>Cadastro</h1>
    </div><div className='footers'>
    <form onSubmit={handleSubmit(data => saveData(data))}>
     <label>Nome</label>
     <input name="nome" ref={register} />
     <label>E-mail</label>
     <input name="senha" ref={register} />    
     <label>Confirmação E-mail</label>
     <input name="nome" ref={register} />
     <label>Senha</label>
     <input name="senha" ref={register} />
     <label>Confirmar Senha</label>
     <input name="nome" ref={register} />
     <input type="submit"  /> 
   </form>

      </div></>

  );
}

export default Cadastro;
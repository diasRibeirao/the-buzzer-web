import React from 'react';

function Home() {
  return (
    <><div className='home'>
      <h1>Por favor, informe abaixo seu e-mail de cadastro.</h1>
    </div><div className='footers'>
    <form onSubmit={handleSubmit(data => saveData(data))}>
     <label>E-mail</label>
     <input name="senha" ref={register} />    
     <input type="submit"  /> 
   </form>

      </div></>

  );
}

export default Home;
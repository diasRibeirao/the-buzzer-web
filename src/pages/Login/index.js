import React from 'react';
import facebook from './facebook.png';
import google from './google.png';

function Login() {
  return (
    <><div className='home'>
      <h2>The Buser</h2>
    </div><div className='footers'>
    <form onSubmit={handleSubmit(data => saveData(data))}>
     <label>E-mail</label>
     <input name="email" ref={register} />
     <label>Senha</label>
     <input name="senha" ref={register} />
     <Link to="/Esqueceu a senha/index.js">esqueci minha senha</Link>
     <input type="submit"  /> 
   </form>
        <img src={facebook} />
        <img src={google} />
      </div></>

  );
}

export default Login;
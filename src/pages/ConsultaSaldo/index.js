import * as React from 'react';
import logo from './logo_bu.png';
import './styles.css';

function ConsultaSaldo() {

  return (
    <div className='saldo'>
      <h1> Consultar Saldo  </h1>
         <img src={logo} />
         <h3>Vale Transporte</h3>
         <h2>R$ 152,61</h2>
         <h3>Comum</h3>
         <h2>R$ 201,61</h2>
    </div>
  );
}

export default ConsultaSaldo;
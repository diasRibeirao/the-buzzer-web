import Button from '@mui/material/Button';
import * as React from 'react';
import logoBom from './logo_bom.png';
import logo from './logo_bu.png';
import './styles.css';
import { useHistory } from "react-router-dom"; 
function BilheteUnico() {
  const history = useHistory();
  const handleNavigateToMeioTransportes = () => history.push("/consultaSaldo");
  const handleNavigateComprarCredito = () => history.push("/compra");
  return (
    <div className='bilhete'>
      <h1> Recarga de cartao de transporte </h1>
      <div className='bu'>
      <img src={logo} />
        <div className='buttons'>
          <Button onClick={handleNavigateToMeioTransportes} className="button" color="error" variant="contained">Consultar Saldo</Button>
          <Button onClick={handleNavigateComprarCredito} className="button" color="error" variant="contained">Comprar crédito</Button>
        </div>
      </div>
      <div className='bom'>
      <img src={logoBom} />
        <div className='buttons'>
          <Button onClick={handleNavigateToMeioTransportes} className="button" color="error" variant="contained">Consultar Saldo</Button>
          <Button onClick={handleNavigateComprarCredito} className="button" color="error" variant="contained">Comprar crédito</Button>
        </div>
      </div>
  
    </div>
  );
}

export default BilheteUnico;
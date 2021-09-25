import { Rating } from '@material-ui/core';
import React from 'react';
import './index.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom";

function RateTrip() {
  const history = useHistory();
  const handleNavigateToMeioTransportes = () => history.push("/");
  return (
      <>
    <div className='Rate'>
      <h1>Como foi a sua Viagem?</h1>
      <h3>Tempo de viagem</h3>
      <Rating name="size-large" size="large"></Rating>
      <h3> Limpeza do onibus </h3>
      <Rating name="size-large" size="large"></Rating>
      <h3> Lotação </h3>
      <Rating name="size-large" size="large"></Rating>
      <h3> Gostaria de falar mais sobre</h3>
      <div className = "Comentario">
          <TextField multiline rows={10}></TextField>
     </div>
     <div className="button">
     <Button onClick={handleNavigateToMeioTransportes} className = "button" color = "error" variant="contained" >Enviar</Button>
     </div>

    </div>
    
    </>
  );
}

export default RateTrip;
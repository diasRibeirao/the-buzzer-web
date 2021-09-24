import * as React from 'react';
import './styles.css';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

function Report() {
  const opcoes = [
    {
      value: 'Sim',
      label: 'Sim',
    },
    {
      value: 'Não',
      label: 'Não',
    },

  ];
  const Input = styled('input')({
    display: 'none',
  });
  

  return (
    <div className='report'>
      <h1> Reportar acidente </h1>
      <h3> Por favor, informe o que ocorreu </h3>
      <div className = "comentario">
          <TextField fullWidth multiline rows={3} size="large" width="400px"></TextField>
     </div>
     <div className = "adicionais">
      <div className = "perguntas">
          <TextField
            id="outlined-select-prosseguiu"
            select
            label="Selecione"
            helperText="A viagem prosseguiu?"
            fullWidth
          >
            {opcoes.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
      
        <div className = "perguntas">
          <TextField
            id="outlined-select-feriu"
            select
            label="Selecione"
            helperText="Alguem se feriu?"
            fullWidth
          >
            {opcoes.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <h3> Pode nos enviar uma foto do ocorrido? </h3>
        <label htmlFor="icon-button-file">
        <Input accept="image/*" id="icon-button-file" type="file" />
        <div className = "icon">
        <IconButton color="primary" aria-label="upload picture" component="span" fullwidth >
          <PhotoCamera />
        </IconButton>
        </div>
      </label>
      <div className = "enviar">
        <Button className="button" color="error" variant="contained">Enviar</Button>

      </div>
     </div>
    </div>
  );
}

export default Report;
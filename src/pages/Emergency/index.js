import React from 'react';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import './styles.css';
import Button from '@mui/material/Button';
import FireExtinguisherIcon from '@mui/icons-material/FireExtinguisher';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';

function Emergency() {
  return (
    <div className='emergency'>
      <h1>Emergência</h1>
      <div className="main-content">
        <div className="services">
          <div className="icon">
            <LocalHospitalIcon  ></LocalHospitalIcon>
          </div>
          <Button className="button" color="error" variant="contained">Solicitar ambulancia</Button>
        </div>
        <div className="services">
          <div className="icon">
            <FireExtinguisherIcon></FireExtinguisherIcon>
          </div>
          <Button className="button" color="error" variant="contained">Solicitar bombeiros</Button>
        </div>
        <div className="services">
          <div className="icon">
            <LocalPoliceIcon></LocalPoliceIcon>
          </div>
          <Button className="button" color="error" variant="contained">Solicitar policia</Button>
        </div>
      </div>
    </div>
  );
}
export default Emergency;
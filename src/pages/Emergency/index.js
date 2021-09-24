import React from 'react';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import { Container, NavButton } from "./styles";
import Button from '@mui/material/Button';
import FireExtinguisherIcon from '@mui/icons-material/FireExtinguisher';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import { Col, Row } from 'react-bootstrap';
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'

function Emergency() {
  return (
    <Container>
      <h2>Emergência</h2>

      <div className="p-2 bd-highlight">
        <Row className="justify-content-center line">
          <Col md={10} className="b-2text-center text-md-rights">
            <FaIcons.FaPlusSquare />
            <NavButton>Solicitar ambulancia</NavButton>
          </Col>
        </Row>

        <Row className="justify-content-center line">
          <Col md={10} className="text-center text-md-rights">
            <FaIcons.FaFireExtinguisher />
            <NavButton>Solicitar bombeiros</NavButton>
          </Col>
        </Row>

        <Row className="justify-content-center line">
          <Col md={10} className="text-center text-md-rights">
            <AiIcons.AiFillAlert />
            <NavButton>Solicitar polícia</NavButton>
          </Col>
        </Row>
      </div>


    </Container>
  );
}
export default Emergency;
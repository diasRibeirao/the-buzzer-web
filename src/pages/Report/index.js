import * as React from 'react';
import { Container, NavButton } from "./styles";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import * as IoIcons from 'react-icons/io'
import { Form, Col, Row } from 'react-bootstrap';


function Report() {
  
  const Input = styled('input')({
    display: 'none',
  });
  

  return (
    <Container>
      <h2>Reportar acidente</h2>

      <div className='report'>
        <div className = "comentario">
            <Form.Group controlId="txtComentario">
              <Form.Label>Por favor, informe o que ocorreu</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>

      </div>
      <div className = "adicionais">
        <div className = "perguntas">
          <Form.Group controlId="sltViagemProsseguiu">
            <Form.Label>A viagem prosseguiu?</Form.Label>
            <Form.Select aria-label="ViagemProsseguiu" >
              <option value="1">Sim</option>
              <option value="2">Não</option>
            </Form.Select>
          </Form.Group>
          </div>
        
          <div className = "perguntas">
            <Form.Group controlId="sltAlguemSeFeriu">
              <Form.Label>Alguem se feriu?</Form.Label>
              <Form.Select aria-label="AlguemSeFeriu" >
                <option value="1">Sim</option>
                <option value="2">Não</option>
              </Form.Select>
            </Form.Group>
          </div>

          <div className="center">
            <Row className="p-2 justify-content-center line">
              <Col md={10} className="text-center text-md-rights">
                <h3> Pode nos enviar uma foto do ocorrido? </h3>

                <label htmlFor="icon-button-file">
                  <Input accept="image/*" id="icon-button-file" type="file" />
                  <IoIcons.IoMdPhotos />
                </label>
              </Col>
            </Row>


            
            
            <div className = "enviar">
              <NavButton>Enviar</NavButton>
            </div>
          </div>
      </div>
      </div>
    </Container>
  );
}

export default Report;
import { Container, NavButton } from "./styles";
import { useHistory } from "react-router-dom";
import { Form } from 'react-bootstrap';
import imgMaps from "../../assets/maps.jpg";

function Direct() {
  const history = useHistory();

  const handleNavigateToMeioTransportes = () => history.push("/transports");

  return (
    <Container>
      <Form>
        <Form.Group className="mb-3" controlId="direct.OrigemInput">
          <Form.Label>Origem</Form.Label>
          <Form.Control type="text" placeholder="Origem" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="direct.DestinoInput">
          <Form.Label>Destino</Form.Label>
          <Form.Control type="text" placeholder="Destino" />
        </Form.Group>
      </Form>

      <div>

        <img src={imgMaps} id="maps" />
        <NavButton onClick={handleNavigateToMeioTransportes}>Meios de Transportes</NavButton>
      </div>
        
    </Container>
  );
}

export default Direct;
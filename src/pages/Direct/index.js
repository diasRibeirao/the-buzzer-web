import { Container } from "./styles";
import { Form } from 'react-bootstrap';

function Direct() {
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
    </Container>
  );
}

export default Direct;
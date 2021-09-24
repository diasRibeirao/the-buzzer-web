import { Container } from "./styles";
import React from 'react';
import { Col, Row } from "react-bootstrap";
import { TransportsData } from "../../components/transportsData";
import { Link } from "react-router-dom";

function Transports() {
  return (
    <Container>
      <h2>Meios de Transportes</h2>

      <div className="p-2 bd-highlight">
        {TransportsData.map((item, index) => {
          return (
            <Row key={index} className="justify-content-center">
              <Col md={10} className="text-center text-md-rights">
                <Link to={`/transport-detail/${item.param}`}>
                  {item.icon}
                  <span>{item.title}</span>
                  {item.iconRight}
                </Link>
              </Col>
            </Row>
          );
        })}
      </div>

    </Container>
  );
}

export default Transports;
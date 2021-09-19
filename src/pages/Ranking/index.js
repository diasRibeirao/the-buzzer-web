import { Container } from "./styles";
import React, { useState, useEffect } from "react";
import { Form } from 'react-bootstrap';
import Table from "../../components/Table";
import { LinhaOnibusData } from "../../data/Ranking/linhaOnibusData"
import { EmpresaOnibusData } from "../../data/Ranking/empresaOnibusData"
import { LinhaMetroData } from "../../data/Ranking/linhaMetroData"

function Ranking() {

  const datas = [ EmpresaOnibusData, LinhaOnibusData, LinhaMetroData ];

  const [columns, setColumns] = useState([]);
  const [data, setData] = useState([]);


  useEffect(() => {
    setColumns(datas[0].columns);
    setData(datas[0].data);
  }, []); 

  const handleRanking = async (e) => {
      let valor = e.target.value;
      setColumns(datas[valor - 1].columns);
      setData(datas[valor - 1].data);
  }

  return (
    <Container>
      <Form.Group controlId="sltRanking">
        <Form.Label>Qual ranking deseja ver?</Form.Label>
        <Form.Select aria-label="Ranking" onChange={handleRanking} >
          <option value="1">Empresa de Ônibus</option>
          <option value="2">Linha de Ônibus</option>
          <option value="3">Linha de Metro</option>
        </Form.Select>
      </Form.Group>

      <div id="tblRanking">
        <Table columns={columns} data={data} />
      </div>

    </Container>
  );
}

export default Ranking;
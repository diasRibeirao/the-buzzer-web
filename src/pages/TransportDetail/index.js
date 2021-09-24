import { Container } from "./styles";
import imgMaps from "../../assets/maps.jpg";
import { useParams } from "react-router";

function TransportDetail({query}) {
  let { param } = useParams();

  return (
    <Container>
       
      <h4>{param}</h4>

      <div>
        <img src={imgMaps} id="maps" alt="" />
      </div>
        
    </Container>
  );
}

export default TransportDetail;
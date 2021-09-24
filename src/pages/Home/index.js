import * as React from 'react';
import logobuser from './buser.png';
import { Button} from 'react-bootstrap';

function Home() {
  return (
    <><div className='home'>
      <h1>Login</h1>
    </div><div className='footers'>
        <img src={logobuser} />
        <div className='buttons'>
          <Button className="button" color="error" variant="contained">Login</Button>
          <Button className="button" color="error" variant="contained">Cadastrar</Button>
        </div>
      </div></>

  );
}

export default Home;
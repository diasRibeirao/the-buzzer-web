import React from 'react';
import logobuser from './buser.png';

function Home() {
  return (
    <><div className='home'>
      <h1>Login</h1>
    </div><div className='footers'>
        <img src={buser} />
        <div className='buttons'>
          <Button className="button" color="error" variant="contained">Facebook</Button>
          <Button className="button" color="error" variant="contained">Google</Button>
        </div>
      </div></>

  );
}

export default Home;
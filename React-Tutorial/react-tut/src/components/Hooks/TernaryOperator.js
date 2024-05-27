import React, { useState } from 'react';
import btnModule from './Button.module.css';//module styling

const TernaryOperator = () => {
    const [status, setStatus] = useState(false);
    const [btnshow, setBtnshow] = useState(false);

  return (
    <div style={{textAlign: "center"}}>
      <input type={btnshow ? 'text' : 'password'} />  
      <button onClick={() => setBtnshow(!btnshow)}>
        {btnshow ? 'Hide' : 'Show'}
      </button><br />

        <button className={btnModule.error}>Error</button>
        <button className={btnModule.warning}>Warning</button>

        <button onClick={() => setStatus(!status)}>
            {status ? 'Hide' : 'Show'}
        </button>
        {status ? <p>Hello!, It's me.</p>
        :
        ""
        }

    </div>
  )
}

export default TernaryOperator;
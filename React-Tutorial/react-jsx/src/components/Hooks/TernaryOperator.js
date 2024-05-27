import React, { useState } from 'react';

const TernaryOperator = () => {
    const [status, setStatus] = useState(false);
    
  return (
    <div>
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
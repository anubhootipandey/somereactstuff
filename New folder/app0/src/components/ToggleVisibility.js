import React, { useState } from 'react';

const ToggleVisibility = () => {
    const [isVisibile, setIsVisibile] = useState(true);

  return (
    <div>
        <button onClick={() => setIsVisibile(!isVisibile)}>
            {isVisibile ? "Hide" : "Show"}
        </button>
        {isVisibile && <p>This is toggled paragraph.</p>}
    </div>
  )
}

export default ToggleVisibility;
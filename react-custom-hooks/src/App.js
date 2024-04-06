import React, { useState, useEffect } from 'react';
const useWindowDimensions = () => {
	  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

	  useEffect(() => {
		    const handleResize = () => {
			      setDimensions({
				        width: window.innerWidth,
				        height: window.innerHeight
			      });
		    }

		    window.addEventListener('resize', handleResize);
		    handleResize();

		    return () => {
			      window.removeEventListener('resize', handleResize);
		    };
	  }, []);
	  return dimensions;
}

const App = () => {
	  const { width, height } = useWindowDimensions();
	  return (
		    <div>
			      <h1>Window dimensions</h1>
			      <p>Width: {width}</p>
			      <p>Height: {height}</p>
		    </div>
	  );
}
export default App;
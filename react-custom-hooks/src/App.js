import React, { useState, useEffect } from 'react';
import './App.css';

const useWindowDimensions = () => {
	// Initialize state for width and height
	  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

	  // useEffect hook to update dimensions on window resize
	  useEffect(() => {
		    const handleResize = () => {
				// Update dimensions state with current window width and height
			      setDimensions({
				        width: window.innerWidth,
				        height: window.innerHeight
			      });
		    }
			// Add event listener for window resize
		    window.addEventListener('resize', handleResize);

			// Call handleResize immediately to set initial dimensions
		    handleResize();

			// Cleanup function to remove event listener on component unmount
		    return () => {
			      window.removeEventListener('resize', handleResize);// Empty dependency array means this effect runs only once on component mount
		    };
	  }, []);
	  return dimensions;
}

const App = () => {
	// Call the custom hook to get window dimensions
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
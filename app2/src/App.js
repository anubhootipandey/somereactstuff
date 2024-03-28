import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
   const [userData, setUserData] = useState([]);

  /*-------------------get in axios-------------------------*/
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        console.log(response);
        setUserData(response.data); // Corrected to response.data
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  /*---------------------post in axios-----------------------*/
  // useEffect(() => {
  //   axios.post('https://jsonplaceholder.typicode.com/users', {
  //     "name": "Anna Bell",
  //     "username": "Abell",
  //     "email": "Tank@july.abc",
  //   })
  //   .then(res => console.log(res))
  //   .catch(error => console.log(error));
  // }, [])

  return (
    <>
      <h1>Axios in React</h1>
      {
        userData.map((d, i) => {
          return <p key={i}>
            Name of the user is : {d.name} <br />
            Email of the user is : {d.email}
            </p>
        })
      }
    </>
  );
}

export default App;

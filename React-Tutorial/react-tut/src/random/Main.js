import React from 'react';
// import JSX from './random/JSX';
import Header from './Header';

const Main = () => {
  const obj = { email: "random@gmail.com"}
  return (
    <div className='App'>
      {/* <JSX /> */}
      <Header name="Marie Curie" obj={obj}>
        <p>Hello, React!!</p>
      </Header>
    </div>
  )
}

export default Main;
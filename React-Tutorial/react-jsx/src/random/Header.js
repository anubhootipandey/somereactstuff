import React from 'react';
import { blog } from '../Data/blog';

const Header = ({obj, name, children}) => {
    // let {obj} = props;//destructure
  return (
    <>
      <div>{name}</div>
      <div>{obj.email}</div>
      <div>{children}</div> {/* how to pass children element to component */}
      <div>
      { blog.map((v, i) => {
        return(
            <Product items={v} key={i} />
        )
      }) }
      </div>
    </>
  )
}

export default Header;

//Passing Object to child component
function Product({items}) {
    return (
        <div>
            <h1>{items.title}</h1>
            <p>{items.body}</p>
        </div>
    )
}
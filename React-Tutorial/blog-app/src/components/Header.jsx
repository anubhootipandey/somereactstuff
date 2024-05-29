import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Header = () => {
  return (
    <div>
        <h1>Header</h1>
        <nav>
            <ul>
                <li><Link to={'/'}>Home</Link> </li>
                <li><Link to={'/about-us'}>About</Link> </li>
                <li><Link to={'/course'}>Course</Link> </li>
                <li><Link to={'/blog'}>Blog</Link> </li>
            </ul>
        </nav>
    </div>
  )
}

export default Header;
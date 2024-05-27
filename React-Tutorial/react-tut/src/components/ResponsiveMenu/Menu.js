import React, { useState } from 'react';
import './Menu.css';

const Menu = () => {
    const [menuStatus, setMenuStatus] = useState(false);

  return (
    <div>
        <button className='btn-icon' onClick={() => setMenuStatus(!menuStatus)}>
            {menuStatus ? 
            <span>&times;</span>
            :
            <span> &#9776;</span>
            }
        </button>
        <div className={`menu-content ${menuStatus ? 'activeMenu' : ' '}`}>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Course</li>
                <li>Gallery</li>
                <li>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Menu;
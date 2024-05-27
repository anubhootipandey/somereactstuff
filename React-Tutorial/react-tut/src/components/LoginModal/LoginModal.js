import React, { useState } from 'react';
import './LoginModal.css';

const LoginModal = () => {
    const [modalStatus, setModalStatus] = useState(false);

  return (
    <div className='menu'>
        <button className='en-btn' onClick={() => setModalStatus(true)}>Enquire Now</button>
        <div onClick={() => setModalStatus(false)} className={`modal-overlay ${modalStatus ? 'modal-show' : ' '}`}></div>
        <div onClick={() => setModalStatus(false)} className={`modal-content ${modalStatus ? 'show-content' : ' '}`}>
            <h1>Enquiry Now <span>&times;</span></h1>
        </div>
    </div>
  )
}

export default LoginModal;
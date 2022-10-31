import React from 'react';
import './modal.css';
import { useNavigate } from 'react-router-dom';

const Modal = ({ open, onClose }) => {
  const navigate = useNavigate();
  if (!open) return null;
  return (
    <div className='overlay'>
      <div className='closeBtn' onClick={onClose}>X</div>
      <div className='modal--container'>
        <div className='modal--item' onClick={onClose}>Home</div>
        <div className='modal--item' onClick={() => {navigate('/assistance-and-guidance'); onClose()}}>Assistance</div>
        <div className='modal--item' onClick={() => {navigate('/leaderboard'); onClose()}}>Leaderboard</div>
        <div className='modal--item' onClick={() => {navigate('/contact'); onClose()}}>Contact</div>
      </div>
    </div>
  )
}

export default Modal
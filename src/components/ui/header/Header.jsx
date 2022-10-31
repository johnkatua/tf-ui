import React, { useEffect, useState } from 'react';
import Button from '../button/Button';
import { useNavigate } from 'react-router-dom';
import './header.css';
import Modal from '../modal/Modal';
import { CiTextAlignJustify } from 'react-icons/ci';

const Header = () => {
  const [width, setWidth] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [width]);

  let isMobile = width < 768 ? true : false;

  return (
    <div className={`header--container ${isMobile && 'header--container__mobile'}`}>
      <div className={`header--logo ${isMobile && 'header--logo__mobile'}`}onClick={() => navigate('/')}>
        {isMobile && (<div onClick={() => setOpenModal(true)} className='header--icon'><CiTextAlignJustify fontSize={'5rem'} /></div>)}
        <img src="/assets/logo1.svg" alt="logo1" width={100} />
      </div>
      <Modal open={openModal} onClose={() => setOpenModal(false)} />
      <div className={`header--details ${isMobile && 'header--details__mobile'}`}>
        {!isMobile && (
          <div className='header--links'>
            <div className='header--links__items' onClick={() => navigate('/assistance-and-guidance')}>Assistance</div>
            <div className='header--links__items' onClick={() => navigate('/leaderboard')}>Leaderboard</div>
            <div className='header--links__items' onClick={() => navigate('/contact')}>Contact</div>
          </div>
            )}
        <div>
          <Button className={'home--btn__small'} text={'Client area'}/>
        </div>
      </div>
    </div>
  )
}

export default Header;
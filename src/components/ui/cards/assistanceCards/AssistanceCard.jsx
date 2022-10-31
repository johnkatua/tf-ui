import React from 'react';
import './assintance.card.css';
import { IconContext } from 'react-icons';

const AssistanceCard = ({ data }) => {
  return (
    <>
      {data.map((item, i) => (
        <div key={i} className='assistance--card__item'>
          <IconContext.Provider value={{ color: 'blue', size: '1.8em' }} >
            <div className='assistance--left__icon'>{item.leftIcon}</div>
          </IconContext.Provider>
          <div className='assistance--card__description'>{item.name}</div>
          <div className='assistance--right__icon'>{item.rightIcon}</div>
        </div>
      ))}
    </>
  )
}

export default AssistanceCard;
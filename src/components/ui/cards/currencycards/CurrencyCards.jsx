import React from 'react';
import './currency.cards.css';

const CurrencyCards = ({ data }) => {
  return (
    <>
      {data.map((item, i) => (
        <div key={i} className='currency--item'>
          <div>{item.name}</div>
          <div className='currency--value'>{item.value}</div>
        </div>
      ))}
    </>
  )
}

export default CurrencyCards;
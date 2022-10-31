import React from 'react';
import './forex.funds.cards.css'

const ForexFundsCards = ({ data }) => {
  return (
    <>
      {data.map((item, i) => (
        <div key={i} className='forex--fund__item'>
          <div>{item.title}</div>
          <div className='forex--fund__value'>{item.description}</div>
        </div>
      ))}
    </>
  )
}

export default ForexFundsCards;
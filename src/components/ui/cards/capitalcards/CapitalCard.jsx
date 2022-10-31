import React from 'react';;
import './capital.card.css';

const CapitalCard = ({ data }) => {
  return (
    <>
      {data.map((item, i) => (
        <div key={i} className='capital--card'>
          <div>{item.title}</div>
          <div>{item.description}</div>
        </div>
      ))}
    </>
  )
}

export default CapitalCard
import React from 'react'
import './phases.card.css';

const PhaseCard = ({ data }) => {
  console.log(data)
  return (
    <>
      {data.map((item, i) => (
        <div key={i} className='phase--card'>
          <div className='phase--card__header'>
            <div className='phase--header__title'>
              <div>{item.name}</div>
              <div className='phase--description'>{item.description}</div>
            </div>
            <div className='phase--header__percentage'>
              <div className='phase--percentage'>{item.percentage}</div>
              <div>{item.title}</div>
            </div>
          </div>
          <div className='phase--card__body'>
            <span>Objectives</span>
            {item.objectives.map((item) => (
              <div className='phase--objectives'>
                <div className='phase--objectives__item'>{item.first}</div>
                <div className='phase--objectives__item'>{item.second}</div>
                <div className='phase--objectives__item'>{item.third}</div>
                <div className='phase--objectives__item'>{item.fourth}</div>
                <div className='phase--objectives__item'>{item.fifth}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  )
}

export default PhaseCard
import React from 'react';
import './leaderboardcard.css'

const LeaderboarcCard = ({ tableData }) => {
  return (
    <>
      {tableData.map((item, index) => (
        <div className='leader--card' key={index}>
          <div className='leader--card__header'>
            <div>
              <span>{item.name}</span>
              <span>icon</span>
            </div>
            <div>
              {item.country}
            </div>
          </div>
          <hr></hr>
          <div className="leader--card__item">
            <div>Profit</div>
            <div>{item.profit}</div>
          </div>
          <div className="leader--card__item">
            <div>Equity</div>
            <div>{item.equity}</div>
          </div>
          <div className="leader--card__item">
            <div>Account Size</div>
            <div>{item.accountSize}</div>
          </div>
          <div className="leader--card__item">
            <div>Gain %</div>
            <div>{item.gain}</div>
          </div>
        </div>
      ))}
    </>
  )
}

export default LeaderboarcCard;
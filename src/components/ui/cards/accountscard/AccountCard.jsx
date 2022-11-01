import React, { Fragment } from 'react'
import './account.card.css'

const AccountCard = ({ data }) => {
  return (
    <>
      {data.map((item) => (
        <>
          <div className='account--card__one'>
            {item.item1.map((item) => (
              <>
                <div className='account--card__currency'>
                  Currency
                  <div className='account--currency__body'>
                  {item.currency.map((item) => (
                    <div className='account--currency__item'>
                      {item.name}
                    </div>
                  ))}
                  </div>
                </div>
                <div className='account--card__balance'>
                  Balance
                  <div className='account--balance__body'>
                    {item.balance.map((item) => (
                      <div className='account--balance__item'>
                        {item.value}
                      </div>
                    ))}
                  </div>
                </div>
              </>
            ))}
          </div>
          <div className='phase--card__two'>
            {item.item2.map((item) => (
              <>
                <div className='card--two__header'>
                  {item.tableHeadData.map((item) => (
                    <div className='card--two__name'>
                      {item.name}
                    </div>
                  ))}
                </div>
                <div className='card--two__body'>
                  <>
                  {item.tableData.map((item) => (
                    <div className='card--two__items test--card'>
                      <div className='card--two__name test--name'>{item.name}</div>
                      {item?.phase1 ? <div className='card--two__name '>{item.phase1}</div> : ""}
                      {item?.phase2 ? <div className='card--two__name test--phase1'>{item.phase2}</div> : ""}
                      {item?.phase3 ? <div className='card--two__name'>{item.phase3}</div> : ""}
                    </div>
                  ))}
                  </>
                  </div>
              </>
            ))}
          </div>
          {/* <div>
            {item.item2.map((item) => (
              <>
                <div>
                  {item.phase1.map((item) => (
                    <div>
                      Trading Period <div>{item.tradingPeriod}</div>
                      Max Daily Loss <div>{item.maxDailyLoss}</div>
                      Max Overall Loss <div>{item.maxOverallLoss}</div>
                      <div></div>
                    </div>
                  ))}
                </div>
                <div>
                  {item.phase2.map((item) => (
                    <div>
                      {item.value}
                    </div>
                  ))}
                </div>
                <div>
                  {item.phase3.map((item) => (
                    <div>
                      {item.value}
                    </div>
                  ))}
                </div>
              </>
            ))}
          </div> */}
        </>
      ))}
    </>
  )
}

export default AccountCard
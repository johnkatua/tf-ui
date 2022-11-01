import { HiCurrencyDollar } from 'react-icons/hi';
import { BiTime } from 'react-icons/bi';
import { RiLayoutFill } from 'react-icons/ri';
import './benefit.card.css';
import { IconContext } from 'react-icons';

const BenefitCard = ({ data }) => {
  return (
    <>
      {data.map((item) => (
        <div className='benefit--card'>
          <IconContext.Provider value={{ color: 'blue', size: '2.5em' }}>
            <div>{item.icon}</div>
          </IconContext.Provider>
          <div>
            <div className='benefit--card__title'>{item.title}</div>
            <div className='benefit--card__description'>{item.description}</div>
          </div>
        </div>
      ))}
    </>
  )
}

BenefitCard.defaultProps = {
  data: [
    {
      icon: <HiCurrencyDollar />,
      title: 'High Profit Splits',
      description: 'Traders are entitled to an 80% profit share of what they achieve'
    },
    {
      icon: <RiLayoutFill />,
      title: 'Platforms',
      description: 'MetaTrader 4 & MetaTrader 5.'
    },
    {
      icon: <BiTime />,
      title: 'Weekend Positions',
      description: 'Overnight and weekend traders are welcomed.'
    }
  ]
}

export default BenefitCard
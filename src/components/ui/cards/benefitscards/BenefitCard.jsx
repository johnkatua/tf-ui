import { HiCurrencyDollar } from 'react-icons/hi';
import { BiTime } from 'react-icons/bi';
import { RiLayoutFill } from 'react-icons/ri';

const BenefitCard = ({ data }) => {
  console.log(data)
  return (
    <>
      {data.map((item) => (
        <div>
          <div>{item.icon}</div>
          <div>{item.title}</div>
          <div>{item.description}</div>
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
      icon: <RiLayoutFill />,
      title: 'Weekend Positions',
      description: 'Overnight and weekend traders are welcomed.'
    }
  ]
}

export default BenefitCard
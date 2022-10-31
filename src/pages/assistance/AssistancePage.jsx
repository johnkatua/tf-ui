import Button from '../../components/ui/button/Button';
import AssistanceCard from '../../components/ui/cards/assistanceCards/AssistanceCard';
import './assintance.css';
import { BsFlagFill, BsInfoSquare, BsCurrencyDollar, BsFlag } from 'react-icons/bs';
import { GoGraph, GoBook } from 'react-icons/go';
import { AiFillSetting, AiOutlineRight } from 'react-icons/ai';

const assistanceData = [
  {
    leftIcon: <BsFlag />,
    name: 'Our Insights',
    rightIcon: <AiOutlineRight />
  },
  {
    leftIcon: <BsInfoSquare />,
    name: 'General Information',
    rightIcon: <AiOutlineRight />
  },
  {
    leftIcon: <GoGraph />,
    name: 'Evaluation & Funding',
    rightIcon: <AiOutlineRight />
  },
  {
    leftIcon: <GoBook />,
    name: 'Trading Rules',
    rightIcon: <AiOutlineRight />
  },
  {
    leftIcon: <AiFillSetting />,
    name: 'Technical Help',
    rightIcon: <AiOutlineRight />
  },
  {
    leftIcon: <BsCurrencyDollar />,
    name: 'Orders & Billing',
    rightIcon: <AiOutlineRight />
  },
]

const AssistancePage = () => {
  return (
    <div className='assistance--container'>
      <div className='assistance--header'>
        <div className='assistance--header__title'>
          Assistance
        </div>
        <input type="text" placeholder="Search" />
      </div>
      <div className='assistance--card'>
        <AssistanceCard data={assistanceData} />
        {/* <div className="assistance--card__item">
          <div>A</div>
          <div className='assistance--card__description'>Our Insight</div>
          <div>C</div>
        </div>
        <div className="assistance--card__item">
          <div>A</div>
          <div className='assistance--card__description'>Our Insight</div>
          <div>C</div>
        </div>
        <div className="assistance--card__item">
          <div>A</div>
          <div className='assistance--card__description'>Our Insight</div>
          <div>C</div>
        </div>
        <div className="assistance--card__item">
          <div>A</div>
          <div className='assistance--card__description'>Our Insight</div>
          <div>C</div>
        </div>
        <div className="assistance--card__item">
          <div>A</div>
          <div className='assistance--card__description'>Our Insight</div>
          <div>C</div>
        </div>
        <div className="assistance--card__item">
          <div>A</div>
          <div className='assistance--card__description'>Our Insight</div>
          <div>C</div>
        </div> */}
      </div>
      <div className='assistance--btn__container'>
        <Button className="home--btn__small" text={"Ask your question"}/>
      </div>
      <div className='home--intouch__footer'>
        <span>
          Join True Forex Funds on an exciting adventure!
        </span>
        <Button className={'home--btn'} text={'Get started'}/>
      </div>
    </div>
  )
}

export default AssistancePage;
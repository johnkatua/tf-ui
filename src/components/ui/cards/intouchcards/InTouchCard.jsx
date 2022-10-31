import React from 'react';
import { IconContext } from 'react-icons';
import { CgPhone } from 'react-icons/cg';
import { GrDocumentText } from 'react-icons/gr';
import { HiOutlineLightBulb, HiUsers, HiDocumentText } from 'react-icons/hi';

import './intouch.card.css';

const InTouchCard = ({ data }) => {
  return (
    <>
      {data.map((item, i) => (
        <div key={i} className='intouchi--card'>
          <IconContext.Provider value={{ color: 'blue', size: '2.5em' }}>
            <div>{item.icon}</div>
          </IconContext.Provider>
          <div>{item.title}</div>
          <div>{item.description}</div>
        </div>
      ))}
    </>
  )
}

InTouchCard.defaultProps = {
  data: [
    {
      icon: <CgPhone />,
      title: 'Help Center',
      description: 'Have a question? Read our Assistance for detailed answers!'
    },
    {
      icon: <HiDocumentText color='blue' />,
      title: 'Blog',
      description: 'Read about our latest stories!'
    },
    {
      icon: <HiOutlineLightBulb />,
      title: 'Testimonials',
      description: 'Insights into the most profitable strategies. Meet our traders!'
    },
    {
      icon: <HiUsers />,
      title: 'Leaderboard',
      description: 'Monitor our trending traders on their journey with us!'
    },

  ]
}

export default InTouchCard;
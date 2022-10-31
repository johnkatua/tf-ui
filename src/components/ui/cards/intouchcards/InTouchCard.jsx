import React from 'react';

const InTouchCard = ({ data }) => {
  return (
    <>
      {data.map((item, i) => (
        <div key={i}>
          {item.title}
        </div>
      ))}
    </>
  )
}

InTouchCard.defaultProps = {
  data: [
    {
      icon: '',
      title: 'Help Center',
      description: 'Have a question? Read our Assistance for detailed answers!'
    },
    {
      icon: '',
      title: 'Blog',
      description: 'Read about our latest stories!'
    },
    {
      icon: '',
      title: 'Testimonials',
      description: 'Insights into the most profitable strategies. Meet our traders!'
    },
    {
      icon: '',
      title: 'Leaderboard',
      description: 'Monitor our trending traders on their journey with us!'
    },

  ]
}

export default InTouchCard;
import Table from '../../components/table/Table';
import './leaderboard.css';
import { useState, useEffect } from 'react'
import LeaderboarcCard from '../../components/list/leaderboardcard/LeaderboarcCard';

const tableHeadData = [
  {
    name: '#'
  },
  {
    name: 'Name'
  },
  {
    name: 'Profit'
  },
  {
    name: 'Equity'
  },
  {
    name: 'Account Size'
  },
  {
    name: 'Gain %'
  },
  {
    name: 'Country'
  }
];

const tableData = [
  {
    id: '01',
    name: 'Riccardo B.',
    profit: '$73,277.29',
    equity: '$173,277.29',
    accountSize: '$100,000.00',
    gain: '50%',
    country: 'USA',
    icon: 'blah'
  },
  {
    id: '02',
    name: 'Riccardo B.',
    profit: '$73,277.29',
    equity: '$173,277.29',
    accountSize: '$100,000.00',
    gain: '50%',
    country: 'USA',
    icon: 'blah'
  },
  {
    id: '03',
    name: 'Riccardo B.',
    profit: '$73,277.29',
    equity: '$173,277.29',
    accountSize: '$100,000.00',
    gain: '50%',
    country: 'USA',
    icon: 'blah'
  },
  {
    id: '04',
    name: 'Riccardo B.',
    profit: '$73,277.29',
    equity: '$173,277.29',
    accountSize: '$100,000.00',
    gain: '50%',
    country: 'USA',
    icon: 'blah'
  },
  {
    id: '05',
    name: 'Riccardo B.',
    profit: '$73,277.29',
    equity: '$173,277.29',
    accountSize: '$100,000.00',
    gain: '50%',
    country: 'USA',
    icon: 'blah'
  },
  {
    id: '06',
    name: 'Riccardo B.',
    profit: '$73,277.29',
    equity: '$173,277.29',
    accountSize: '$100,000.00',
    gain: '50%',
    country: 'USA',
    icon: 'blah'
  },
  {
    id: '07',
    name: 'Riccardo B.',
    profit: '$73,277.29',
    equity: '$173,277.29',
    accountSize: '$100,000.00',
    gain: '50%',
    country: 'USA',
    icon: 'blah'
  },
  {
    id: '08',
    name: 'Riccardo B.',
    profit: '$73,277.29',
    equity: '$173,277.29',
    accountSize: '$100,000.00',
    gain: '50%',
    country: 'USA',
    icon: 'blah'
  },
  {
    id: '09',
    name: 'Riccardo B.',
    profit: '$73,277.29',
    equity: '$173,277.29',
    accountSize: '$100,000.00',
    gain: '50%',
    country: 'USA',
    icon: 'blah'
  },
  {
    id: '10',
    name: 'Riccardo B.',
    profit: '$73,277.29',
    equity: '$173,277.29',
    accountSize: '$100,000.00',
    gain: '50%',
    country: 'USA',
    icon: 'blah'
  },
]

const LeaderPage = () => {
  const [width, setWidth] = useState(0);

  
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [setWidth]);


  let isMobile = width < 768 ? true : false;
  return (
    <div className='leaderboard--container'>
      <div className='leaderboard--header'>
        <div className='leaderboard--header__title'>
          Leaderboard
        </div>
        <div className='leaderboard--links'>
          <div className="leaderboard--header__links">All</div>
          <div className="leaderboard--header__links">$ 10k</div>
          <div className="leaderboard--header__links">$ 25k</div>
          <div className="leaderboard--header__links">$ 50k</div>
          <div className="leaderboard--header__links">$ 100k</div>
          <div className="leaderboard--header__links">$ 200k</div>
        </div>
      </div>
      <div className='leaderboard--table'>
        {isMobile ? (
          <LeaderboarcCard tableData={tableData} />
        ) : (
          <Table tableHeadData={tableHeadData} tableData={tableData} />
        )}
      </div>
    </div>
  )
}

export default LeaderPage;
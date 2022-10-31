import React from 'react'
import Button from '../../components/ui/button/Button';
import BenefitCard from '../../components/ui/cards/benefitscards/BenefitCard';
import CurrencyCards from '../../components/ui/cards/currencycards/CurrencyCards';
import ForexFundsCards from '../../components/ui/cards/forexFundCards/ForexFundsCards';
import PhaseCard from '../../components/ui/cards/phasecards/PhaseCard';
import FooterContainer from '../../components/ui/footer/FooterContainer';
import { benefitsData, currency, forexFunds, phasesData } from '../../Data';
import './home.css';

const HomePage = () => {
  return (
      <div className='home--container'>
        <div className="home--image">
        </div>
        <div className='home--content'>
          <div className='home--content__container'>
            <div className='home--description'>
              <div className='home--description__title'>
                Never depend on small capital
              </div>
              <div className='home--description__para'>
                Complete our Evaluation Program and get funded up to $400,000
              </div>
              <div className='home--description__btn'>
                <Button className={'home--btn'} text={'Get started'}/>
              </div>
            </div>
          </div>
          <div className='home--finances__container '>
            <div className='home--finances__box'>
              <CurrencyCards data={currency} />
            </div>
          </div>
          <div className='home--forex__funds'>
            <div className='home--forex__content'>
              <div className='home--forex__image'>
                <img src="/assets/funds.svg" alt="funds" />
              </div>
              <div className='home--forex__details'>
                <div className='home--forex__title'>True Forex Funds</div>
                <div className='home--forex__description'>
                  True Forex Funds is the fastest-evolving proprietary trading firm with an
                  extensive vision that comprises groundbreaking technology and modern solutions
                  for traders who are keen to advance in their careers. Our funding program grants you up to
                  $400,000 upon successfully passing our 2-Phase Evaluation Process and the company can directly
                  cover your potential losses.
                </div>
                <div className='home--forex__cards'>
                  <ForexFundsCards data={forexFunds} />
                </div>
              </div>
            </div>
          </div>
          <div className='home--benefits__container'>
            <div className='home--benefits__content'>
              <div className='home--benefits__title'>Benefits</div>
              <div className='home--benefits__description'>
                Our clear vision allows us to motivate traders by helping them move forward 
                with easily understandable rules and user-friendly Profit Targets. The True Forex
                Funds Customer Service Support Team provides the best possible user experience available in the
                market with instant response times during business hours
              </div>
              <div className='home--benefits__card'>
                <BenefitCard />
              </div>
            </div>
          </div>
          <div className='home--phases__container'>
            <div className='home--phases__content'>
              <div className='home--phases__title'>How it works</div>
              <div className='home--phases__description'>
                To gain access to our company's capital, traders are required to
                pass a 2-Phase Evaluation Program. For this, you simply need to demonstrate
                your skills by achieving our realistic Profit Targets and since True Forex Funds
                is seeking talented individuals, we have set a few simple Trading Objectives
                that traders have to follow.
              </div>
              <div className='home--phases__card'>
                <PhaseCard data={phasesData} />
              </div>
              <div className='phase--btn'>
                <Button className={'home--btn'} text={'Get started'}/>
              </div>
            </div>
          </div>
          <div className='home--accounts__container'>
            <div className='home--accounts__content'>
              <div className='home--phases__title'>
                Configure your Account
              </div>
              <div className='home--phases__description'>
                Boost Your Career by Getting Funded
              </div>
              <div className='home--accounts__card'>
                <div className="accounts-card">Item </div>
                <div className="accounts-card">Item </div>
              </div>
              <div className='phase--btn'>
                <Button className={'home--btn'} text={'Get started'}/>
              </div>
            </div>
          </div>
          <div className='home--capital'>
            <div className='home--content__title'>
              Trade our Capital
            </div>
            <div className='home--content__description'>
              True Forex Funds is here to enhance your trading and help you succeed in your career.
              Our system is built to give you an incredibly smooth and clear trading experience
              with no major limitations on your trading style. We have set a few simple rules to follow
              and our main goal is to find consistent and profitable traders for our ever-expanding community.
            </div>
            <div className='home--capital__card'>
              <div className="phases--card">Item</div>
              <div className="phases--card">Item</div>
              <div className="phases--card">Item</div>
            </div>
          </div>
          <div className="home--intouch">
            <div className='home--content__title'>
              Get in touch
            </div>
            <div className='home--intouch__card'>
              <div className="intouch--card">Item</div>
              <div className="intouch--card">Item</div>
              <div className="intouch--card">Item</div>
              <div className="intouch--card">Item</div>
            </div>
            <div className='home--intouch__footer'>
              <span>
                Join True Forex Funds on an exciting adventure!
              </span>
              <Button className={'home--btn'} text={'Get started'}/>
            </div>
          </div>
          <FooterContainer />
        </div>
      </div>
  )
}

export default HomePage;
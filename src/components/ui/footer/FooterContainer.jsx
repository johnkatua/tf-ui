import './footer.css';

const FooterContainer = () => {
  return (
    <div className='footer--container'>
      <div className="footer--content">
        <div className='footer--header'>
          <div className='footer--header__image'>
            <img src="/assets/logo1.svg" alt="logo1" />
            <div>
              &copy; 2022 All rights reserved.
            </div>
          </div>
          <div className='footer--links'>
            <div>Privacy Policy</div>
            <div>Terms of Use</div>
            <div>Affiliate program</div>
          </div>
        </div>
        <div className='footer--description'>
          True Forex Funds is a service provider, all information available on our site 
          is intended solely for the study purposes related to trading on financial markets. 
          Accordingly, we do not offer financial, investment, tax, brokerage or other advice 
          and/or services. Trading in financial markets is a high-risk activity, past performance 
          do not guarantee future ones. It is highly advised not to risk more, than you can afford 
          to lose. Brokers and operators of trading platforms are persons or entities that are 
          separate from True Forex Funds and their own terms and conditions will apply when 
          you use their services and products. The content in our platform is applicable to 
          the extent local laws and/or regulations permit.
        </div>
      </div>
    </div>
  )
}

export default FooterContainer
import './layout.css';
import Header from '../ui/header/Header';
import FooterContainer from '../ui/footer/FooterContainer';

const Layout = ({ children, showFooter=true}) => {
  return (
    <div className='layout--container'>
      <div>
        <Header />
      </div>
      <div>{children}</div>
      {showFooter && 
      <div>
        <FooterContainer />
      </div>
      }
    </div>
  )
}

export default Layout;
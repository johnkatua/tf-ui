import { BiTime } from 'react-icons/bi';
import { GrLocation } from 'react-icons/gr';
import { AiOutlineMail } from 'react-icons/ai';
import { BsTwitter, BsInstagram, BsYoutube, BsFacebook } from 'react-icons/bs';
import Button from '../../components/ui/button/Button';
import './contact.css';

const ContactPage = () => {
  return (
    <div className='contact--container'>
      <div className='home--content__title'>
        Contact
      </div>
      <div className='home--content__description'>
        Feel free to contact us for further assistance during our business hours.
     </div>
      <div className='contact--details'>
        <div className='contact--details__links'>
          <div className='contact--links__box'>
            <div>
              <BiTime />
            </div>
            <div>
              <div>Monday - Saturday</div>
              <div>8:00AM - 5:00PM</div>
            </div>
          </div>
          <div className='contact--links__box'>
            <div>
              <GrLocation />
            </div>
            <div>
              Nairobi, Kenya
            </div>
          </div>
          <div className='contact--links__box'>
            <div>
              <AiOutlineMail />
            </div>
            <div>
              support@trueforexfunds.com
            </div>
          </div>
          <div className='contact--channels__container'>
            <div className="contact--channels">
              <BsTwitter />
            </div>
            <div className="contact--channels">
              <BsYoutube />
            </div>
            <div className="contact--channels">
              <BsFacebook />
            </div>
            <div className="contact--channels">
              <BsInstagram />
            </div>
          </div>
        </div>
        <div className='contact--details__form'>
          <div className='home--content__title'>
            Have questions?
          </div>
          <div className='contact--input__container'>
            <div className="contact--input__details">
              <div>Your name</div>
              <input type="text" />
            </div>
            <div className="contact--input__details">
              <div>Your email</div>
              <input type="email" />
            </div>
            <div className="contact--input__details">
              <div>Subject</div>
              <input type="text" />
            </div>
          </div>
          <div className='contact--textarea'>
            <div>Your question</div>
            <textarea name="" id="" rows="10"></textarea>
          </div>
          <div className='contact--btn__box'>
            <Button className="home--btn__small" text="Submit" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage;
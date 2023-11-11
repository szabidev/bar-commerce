import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer__content">
        <div className="footer__content--info">
          <h3 className="footer__content--info__title">Info</h3>
          <ul className="footer__content--info__list">
            <li className="footer__content--info__list-item">About us</li>
            <li className="footer__content--info__list-item">Terms & conditions</li>
            <li className="footer__content--info__list-item">Return policy</li>
            <li className="footer__content--info__list-item">Contact us</li>
          </ul>
        </div>
        <div className="footer__content--showroom">
          <div className="footer__content--showroom__location">
            <img src="/img/location_background.jpg" alt="bar" />
          </div>
          <div className="footer__content--showroom__address">
            <h3 className="footer__content--showroom__address-title">Showroom</h3>
            <p className="footer__content--showroom__address-visit">Visit our showroom</p>
            <p className="footer__content--showroom__address-text">21 Random Street, Floor 7 Random City, 123456</p>
            <p className="footer__content--showroom__address-days">Monday-Friday</p>
            <p className="footer__content--showroom__address-hours">10 a.m - 6.pm</p>
          </div>
        </div>
        <div className="footer__content--explore">
          <h3 className="faq">FAQ</h3>
          <div className="socials">
            <div className="instagram">
              <InstagramIcon sx={{ color: 'white' }} />
            </div>
            <div className="youtube">
              <YouTubeIcon sx={{ color: 'white' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

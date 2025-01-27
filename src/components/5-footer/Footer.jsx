import "./footer.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex footer-container">
      <div className="contact-info">
        <FaPhoneAlt className="contact-icon" />
        <p className="contact-title">Phone</p>
        <a href="tel:+201157722122" className="contact-link">
          +20 11 57 72 21 22
        </a>
      </div>
      <div className="contact-info">
        <FaEnvelope className="contact-icon" />
        <p className="contact-title">Email</p>
        <a href="mailto:ahmed.0islam456@gmail.com" className="contact-link">
          ahmed.0islam456@gmail.com
        </a>
      </div>
      <div className="contact-info">
        <FaMapMarkerAlt className="contact-icon" />
        <p className="contact-title">Location</p>
        <address className="contact-link">Giza, Egypt</address>
      </div>
    </footer>
  );
};

export default Footer;

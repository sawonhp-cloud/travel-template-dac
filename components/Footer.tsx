import Link from "next/link";
import {
  FaArrowUp,
  FaInstagram,
  FaPinterestP,
  FaFacebookF,
} from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main wrap">
        <div className="footer-brand">
          <Link className="brand brand-footer" href="/">
            <span className="brand-mark">
              <span>tb</span>
            </span>
            <span>
              travel<span className="brand-accent">boss</span>
              <small>GO BEYOND THE ORDINARY</small>
            </span>
          </Link>
          <p>For the curious, the courageous, and everyone in between.</p>
          <div className="socials">
            <a href="#instagram" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#pinterest" aria-label="Pinterest">
              <FaPinterestP />
            </a>
            <a href="#facebook" aria-label="Facebook">
              <FaFacebookF />
            </a>
          </div>
        </div>
        <div className="footer-col">
          <b>EXPLORE</b>
          <a href="#trips">Our journeys</a>
          <a href="#about">Why Travel Boss</a>
          <a href="#stories">Travel journal</a>
        </div>
        <div className="footer-col">
          <b>HERE TO HELP</b>
          <a href="mailto:hello@travelboss.com">Get in touch</a>
          <a href="#faq">FAQs</a>
          <a href="#terms">Terms & conditions</a>
        </div>
        <a className="back-top" href="#top">
          Back to top <FaArrowUp />
        </a>
      </div>
      <div className="footer-bottom wrap">
        <span>© 2026 Travel Boss. Made for the curious.</span>
        <span>Travel well. Leave a little wonder.</span>
      </div>
    </footer>
  );
}

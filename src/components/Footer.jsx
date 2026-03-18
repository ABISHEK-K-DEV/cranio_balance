import logo from '../assets/footerlogo.svg'
import whatsAppIcon from '../assets/WhatsAppIcon.svg'
import './Footer.css'

function Footer() {
  return (
    <footer className="site-footer" id="faq">
      <div className="container footer-grid">
        <div className="footer-brand-col">
          <a className="footer-logo-link" href="#top" aria-label="Go to homepage">
            <img className="footer-logo" src={logo} alt="CranioBalance logo" />
          </a>
          <p>
            Ganzheitliches Wohlbefinden für Körper und Geist.
          </p>
        </div>

        <div>
          <h4>Navigieren</h4>
          <ul>
            <li>
              <a href="#services">Körper und Geist</a>
            </li>
            <li>
              <a href="#about">Ganzheitliches Wohlbefinden</a>
            </li>
            <li>
              <a href="#experience">Cranio Sacral Praktikerin</a>
            </li>
            <li>
              <a href="#experience">Cranio Sacral Erfahrungen</a>
            </li>
            <li>
              <a href="#faq">Kosten & FAQ</a>
            </li>
          </ul>
        </div>

        <div>
          <h4>Kontakt</h4>
          <ul>
            <li>
              <a className="wa-link" href="#booking" aria-label="Chat on WhatsApp">
                <img className="wa-icon" src={whatsAppIcon} alt="" aria-hidden="true" />
                <span className="wa-number">(555) 987-6543</span>
              </a>
            </li>
            <li>office@craniobalances.com</li>
            <li>Gluckgasse 1/7</li>
            <li>1010 Wien Österreich</li>
          </ul>
        </div>

        <div className="footer-hours-col">
          <h4>Öffnungszeiten</h4>
          <ul>
            <li>Montag - Freitag: 9 - 19 Uhr</li>
            <li>Samstag: 10 - 16 Uhr</li>
            <li>Sonntag: Geschlossen</li>
          </ul>

          <a className="footer-booking-btn" href="#booking">
            Termin Buchen
          </a>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Cranio Balance</span>
      </div>
    </footer>
  )
}

export default Footer

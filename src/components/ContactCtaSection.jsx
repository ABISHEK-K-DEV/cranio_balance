import './ContactCtaSection.css'
import whatsAppIcon from '../assets/WhatsAppIcon.svg'
import dotIcon from '../assets/dot.svg'
import RightArrowIcon from '../assets/pricing_selected_ArrowRight.svg'
import WhitePhone from '../assets/whitePhone.svg'
import Email from '../assets/Mail.svg'
import Phone from '../assets/Phone.svg'

function ContactCtaSection() {
  return (
    <section className="contact-cta" aria-label="Kontakt und Buchung">
      <div className="container contact-cta__inner">
        <span className="contact-cta__eyebrow">Bereit für Ihre craniosacrale Entspannung?</span>

        <h2 className="contact-cta__title">Bringen Sie Körper und Geist in Einklang</h2>

        <p className="contact-cta__description">
          Machen Sie den ersten Schritt zu mehr innerer Ruhe. Buchen Sie einen Termin, um Spannungen sanft zu lösen und Ihr Wohlbefinden nachhaltig zu stärken.
        </p>

        <div className="contact-cta__actions">
            <a className="contact-cta__button contact-cta__button--primary" href="#booking">
              Jetzt Craniosacral-Sitzung buchen
              <span aria-hidden="true">
                <img className="contact-cta__button-icon" src={RightArrowIcon} alt="" />
              </span>
            </a>

            <a className="contact-cta__button contact-cta__button--outline" href="tel:+43224329121">
              <span className="contact-cta__button-icon" aria-hidden="true">
                <img src={WhitePhone} alt="" />
              </span>
              <span className="contact-cta__button-text">Anrufen</span>
            </a>
        </div>

        <div className="contact-cta__meta">
          <a className="contact-cta__meta-link" href="tel:+43224329121">
            <img className="contact-cta__meta-icon" src={Phone} alt="" aria-hidden="true" />
            <span>+43 2243 291 21</span>
          </a>
          <span className="contact-cta__dot-separator" aria-hidden="true">
            <img src={dotIcon} alt="" />
          </span>
          <a className="wa-link" href="https://wa.me/5559876543" target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
            <img className="wa-icon" src={whatsAppIcon} alt="" aria-hidden="true" />
            <span className="wa-number">(555) 987-6543</span>
          </a>
          <span className="contact-cta__dot-separator" aria-hidden="true">
            <img src={dotIcon} alt="" />
          </span>
          <a className="contact-cta__meta-link" href="mailto:office@craniobalances.com">
           <img className="contact-cta__meta-icon" src={Email} alt="" aria-hidden="true" />
            <span>office@craniobalances.com</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default ContactCtaSection

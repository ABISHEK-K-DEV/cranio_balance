import './PractitionerSection.css';
import doctorImage from '../assets/doctor-image.png';
import Book from '../assets/book.svg';
import Badge from '../assets/badge.svg';
import QuoteIcon from '../assets/Quote.svg';

const PractitionerSection = () => {
  return (
    <section className="practitioner-section" id="practitioner">
      <div className="practitioner-container">
        <div className="practitioner-image-wrapper">
          <img src={doctorImage} alt="Ekaterina Potego - Craniosacral-Praktikerin" className="practitioner-image" />
        </div>
        
        <div className="practitioner-content">
          <span className="practitioner-label">Ihre Praktikerin</span>
          
          <h2 className="practitioner-name">Ekaterina Potego</h2>
          <h3 className="practitioner-role">Craniosacral-Praktikerin</h3>
          
          <p className="practitioner-subrole">Craniosacral-Praktekerin, Kinesiologin mit LSB-Schein</p>
          
          <div className="practitioner-quote-wrapper">
            <div className="quote-icon">
              <img src={QuoteIcon} alt="Quote" />
            </div>
            <div className="quote-content">
              <p>Ich bin überzeugt, dass Menschen leichter zu mehr Wohlbefinden finden, wenn sie sich sicher, verstanden und achtsam begleitet fühlen."</p>
            </div>
          </div>
          
          <div className="practitioner-bio">
            <p>
             Ekaterina Potego schafft einen ruhigen, unterstützenden Raum für Menschen, die sich mehr Balance und Wohlbefinden wünschen.
            </p>
            <p>
              Ihr Zugang beginnt mit Zuhören. Sie nimmt sich Zeit, um persönliche Anliegen zu verstehen und jede Sitzung achtsam und individuell zu gestalten.
            </p>
            <p>
              Mit ihrer sanften und einfühlsamen Art begleitet sie Menschen bei Stress, anhaltenden Spannungen und dem Wunsch nach mehr Ruhe im Alltag.
            </p>
          </div>
          
          <div className="practitioner-stats">
            <div className="stat-item">
              <div className="stat-number">15+</div>
              <div className="stat-label">Jahre Erfahrung</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">98%</div>
              <div className="stat-label">Kundenzufriedenheit</div>
            </div>
          </div>
          
          <div className="practitioner-details">
            <div className="detail-column">
              <div className="detail-header">
                <img src={Badge} alt="Abzeichen Icon" className="detail-icon" />
                <h4>Zertifizierungen</h4>
              </div>
              <ul className="detail-list">
                <li>Zertifizierte Craniosacral-Praktikerin</li>
                <li>Zertifizierte Kinesiologin</li>
                <li>LSB-Schein</li>
              </ul>
            </div>
            
            <div className="detail-column">
              <div className="detail-header">
                <img src={Book} alt="Buch Icon" className="detail-icon" />
                <h4>Arbeitsweise</h4>
              </div>
              <ul className="detail-list">
                <li>Aufmerksames Zuhören und persönliches Verstehen</li>
                <li>Sanfte und achtsam gestaltete Sitzungen</li>
                <li>Ganzheitlicher Blick auf tieferliegende Zusammenhänge</li>
                <li>Persönlicher Kontakt</li>
              </ul>
            </div>
            
            <div className="detail-column">
              <div className="detail-header">
                <img src={Book} alt="Buch Icon" className="detail-icon" />
                <h4>Wen sie begleitet</h4>
              </div>
              <ul className="detail-list">
                <li>Die Therapie ist besonders für Babys, Kinder und Jugendliche geeignet, da sich ihr Bewegungs- und Haltungssystem noch optimal entwickeln und korrigieren lässt.</li>
                <li>Menschen mit anhaltenden Schmerzen oder Spannungen</li>
                <li>Menschen, die sich mehr Balance und Leichtigkeit wünschen</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PractitionerSection;

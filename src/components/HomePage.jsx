import HeroImage from '../assets/home_image1.jpg'
import HeroDoctorImage from '../assets/homeimage2.png'
import RightArrowIcon from '../assets/pricing_selected_ArrowRight.svg'
import './HomePage.css'

function HomePage() {
  return (
    <>
      <div id="home" />
      <section className="home-hero" id="booking">
        <img
          className="home-hero-image"
          src={HeroImage}
          alt="Craniosacrale Behandlung in ruhiger Praxisatmosphaere"
        />
        <div className="home-hero-overlay" />
        <img
          className="home-hero-doctor-image"
          src={HeroDoctorImage}
          alt="Craniosacral Praktikerin"
        />

        <div className="container home-hero-content">
          <span className="home-hero-chip">
            <span className="home-hero-chip-dot home-hero-chip-dot-accent" aria-hidden="true" />
            <span className="home-hero-chip-label">SANFT · NICHT-INVASIV · GANZHEITLICH</span>
          </span>
          <h1>
            Craniosacral in Wien, Österreich:
            <br />
            Ganzheitliches Wohlbefinden für Körper und Geist
          </h1>
          <p>
            Sanfte Craniosacral-Praxis und achtsame Körperarbeit, um Spannungen zu lösen und Körper und Geist wieder in Einklang zu bringen.
          </p>
          <a href="#therapy" className="home-hero-action">
            Jetzt Craniosacral-Sitzung buchen <span className="home-hero-action-icon" aria-hidden="true"><img className="home-hero-action-icon-image" src={RightArrowIcon} alt="" /></span>
          </a>
        </div>

        <div className="home-hero-highlights" aria-label="Praxis Highlights">
          <div className="home-hero-highlights-inner">
            <span>Zertifizierte <b>Craniosacral-Praktikerin</b></span>
            <span>Zertifizierte <b>Kinesiologin mit LSB-Schein</b></span>
            <span>Praxis in <b>1010, Wien</b></span>
            <span><b>98 %</b> Kundenzufriedenheit</span>
          </div>
        </div>
      </section>

      <div id="about" className="home-anchor" aria-hidden="true" />
      <div id="experience" className="home-anchor" aria-hidden="true" />

    </>
  )
}

export default HomePage

import therapyImage from '../assets/Container.png'
import brainIcon from '../assets/brain.svg'
import moonIcon from '../assets/moon.svg'
import starIcon from '../assets/star.svg'
import RightArrowIcon from '../assets/pricing_selected_ArrowRight.svg'
import './TherapyPage.css'

function TherapyPage() {
  return (
    <>
      <section className="container therapy-section" id="therapy">
        <img
          className="therapy-media"
          src={therapyImage}
          alt="Craniosacrale Koerperarbeit Behandlung"
        />

        <div className="therapy-content">
          <span className="therapy-eyebrow">Über die craniosacrale Körperarbeit</span>

          <h2>
            Körper und Geist:
            <br />
            Was ist craniosacrale Körperarbeit?
          </h2>

          <p>
            Unsere Arbeit basiert auf der Überzeugung: Der Körper verdient Zeit, Aufmerksamkeit und präzises Wahrnehmen. Jede Sitzung beginnt mit einer körperorientierten Abklärung Ihres Anliegens und wird durch achtsame craniosacrale Arbeit fortgeführt. Dabei wird die natürliche Achse des Körpers wiederhergestellt – insbesondere durch Arbeit am Kopf.
          </p>

          <div className="therapy-feature-grid">
            <article className="therapy-feature-card">
              <span className="therapy-feature-icon" aria-hidden="true">
                <img className="therapy-feature-icon-image" src={brainIcon} alt="" />
              </span>
              <h3>Ganzheitliches Wohlbefinden</h3>
              <p>Das Wohlbefinden von Körper und Geist steht im Mittelpunkt.</p>
            </article>

            <article className="therapy-feature-card">
              <span className="therapy-feature-icon" aria-hidden="true">
                <img className="therapy-feature-icon-image" src={moonIcon} alt="" />
              </span>
              <h3>Innere Ruhe finden</h3>
              <p>
                Die craniosacrale Arbeit unterstützt dabei, Stress abzubauen sowie innere Anspannung und Schmerzen zu lösen.
              </p>
            </article>

            <article className="therapy-feature-card">
              <span className="therapy-feature-icon" aria-hidden="true">
                <img className="therapy-feature-icon-image" src={starIcon} alt="" />
              </span>
              <h3>Sanfte Begleitung</h3>
              <p>
                Eine achtsame und unterstützende Praxis für Menschen jeden Alters.
              </p>
            </article>
          </div>

          <a className="therapy-cta" href="#booking">
            Jetzt Craniosacral-Sitzung buchen 
            <span aria-hidden="true">
              <img className="therapy-cta-icon" src={RightArrowIcon} alt="" />
            </span>
          </a>
        </div>
      </section>
    </>
  )
}

export default TherapyPage

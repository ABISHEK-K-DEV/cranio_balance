import { useState } from 'react';
import './SupportSection.css';

import messageIconActive from '../assets/message-active.svg'
import messageIconInactive from '../assets/message-inactive.svg'
import orangeCheckCircle from '../assets/orange-check-circle.svg'
import blueCheckCircle from '../assets/blue-check-circle.svg'
import tealCheckCircle from '../assets/teal-check-circle.svg'
import aiIconActive from '../assets/ai-active.svg'
import aiIconInactive from '../assets/ai-inactive.svg'
import handIconActive from '../assets/hand-active.svg'
import handIconInactive from '../assets/hand-inactive.svg'
import arrowGreenIcon from '../assets/arrow-green.svg'
import arrowGrayIcon from '../assets/arrow-gray.svg'
import clockIcon from '../assets/clock-icon.svg'
import RightArrowIcon from '../assets/pricing_selected_ArrowRight.svg'

const SupportSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 0,
      title: "Zuhören & Verstehen",
      duration: "~10 min",
      iconActive: messageIconActive,
      iconInactive: messageIconInactive,
      detailTitle: "Zuhören & Verstehen",
      detailSubtitle: "Wir beginnen mit Zuhören",
      content: (
        <>
          <p>
            Vor der Sitzung nehmen wir uns Zeit für ein Gespräch darüber, was Sie zu uns führt.
            Sie können teilen, welche Spannungen, Belastungen oder Anliegen Sie im Moment begleiten. So entsteht Raum, Ihre Situation besser zu verstehen und die Sitzung auf Ihre persönlichen Bedürfnisse abzustimmen.
          </p>
          <span className="prep-list-title">Vor der Sitzung:</span>
          <ul className="prep-list">
            <li><img src={orangeCheckCircle} alt="Check" className="check-icon-img" /> Essen Sie etwa eine Stunde vorher nur eine leichte Mahlzeit.</li>
            <li><img src={orangeCheckCircle} alt="Check" className="check-icon-img" /> Verwenden Sie nach Möglichkeit wenig bis kein Parfüm.</li>
            <li><img src={orangeCheckCircle} alt="Check" className="check-icon-img" /> Tragen Sie bequeme Kleidung, in der Sie gut entspannen können.</li>
          </ul>
        </>
      ),
      infoBox: {
        title: "GUT ZU WISSEN",
        text: "Sie können genauso kommen, wie Sie sind eine besondere Vorbereitung ist nicht notwendig."
      }
    },
    {
      id: 1,
      title: "Sanfte Craniosacral-Arbeit",
      duration: "~40 min",
      iconActive: handIconActive,
      iconInactive: handIconInactive,
      detailTitle: "Sanfte Craniosacral-Arbeit",
      detailSubtitle: "Im Einklang mit den natürlichen Rhythmen des Körpers.",
      content: (
        <>
          <p>
            Während dieses Teils der Sitzung liegen Sie bequem, während die Praktikerin mit sanfter, achtsamer Berührung arbeitet. Die craniosacrale Arbeit orientiert sich an den feinen Signalen Ihres Körpers. So kann Raum entstehen, damit Spannungen sich lösen und der Körper Schritt für Schritt wieder zu mehr Balance findet.
          </p>
          <span className="prep-list-title">Was Sie während der Sitzung wahrnehmen können:</span>
          <ul className="prep-list">
            <li><img src={blueCheckCircle} alt="Check" className="check-icon-img" /> Ein tiefes Gefühl von Entspannung</li>
            <li><img src={blueCheckCircle} alt="Check" className="check-icon-img" /> Feine Veränderungen von Spannung oder Druck im Körper</li>
            <li><img src={blueCheckCircle} alt="Check" className="check-icon-img" /> Eine ruhigere Atmung und ein entspannteres Nervensystem</li>
          </ul>
        </>
      ),
      infoBox: {
        title: "GUT ZU WISSEN",
        text: "Jede Sitzung ist einzigartig. Manche Menschen spüren sofort Entspannung, andere nehmen Veränderungen erst nach und nach wahr."
      }
    },
    {
      id: 2,
      title: "Integration & Reflexion",
      duration: "~10 min",
      iconActive: aiIconActive,
      iconInactive: aiIconInactive,
      detailTitle: "Integration & Reflexion",
      detailSubtitle: "Dem Körper Zeit geben, das Erlebte aufzunehmen.",
      content: (
        <>
          <p>
            Nach der craniosacralen Arbeit folgt eine kurze Phase der Ruhe. Dieser stille Moment gibt dem Nervensystem Raum, das Erlebte zu integrieren und in Ruhe wieder im Alltag anzukommen. Bevor Sie gehen, nehmen wir uns noch ein paar Minuten Zeit für eine gemeinsame Reflexion darüber, wie Sie sich fühlen und was Ihr Körper gerade braucht.
          </p>
          <span className="prep-list-title">Nach der Sitzung:</span>
          <ul className="prep-list">
            <li><img src={tealCheckCircle} alt="Check" className="check-icon-img" /> Bewegen Sie sich zunächst ruhig und langsam</li>
            <li><img src={tealCheckCircle} alt="Check" className="check-icon-img" /> Trinken Sie Wasser und gönnen Sie sich bei Bedarf etwas Ruhe</li>
            <li><img src={tealCheckCircle} alt="Check" className="check-icon-img" /> Achten Sie darauf, wie sich Ihr Körper im Laufe des Tages anfühlt</li>
          </ul>
        </>
      ),
      infoBox: {
        title: "GUT ZU WISSEN",
        text: "Manche Menschen fühlen sich sofort entspannt, andere nehmen feine Veränderungen erst später wahr."
      }
    }
  ];

  return (
    <section className={`support-section theme-${activeStep}`} id="therapy-process">
      <div className="support-header">
        <span className="section-label">Eine Sitzung</span>
        <h2>Wie wir Ihr Wohlbefinden begleiten</h2>
        <div className="intro-text">
          Viele Menschen kommen zu uns wegen Stress, Spannungen oder Schmerzen. Oft wurden bereits verschiedene Ansätze ausprobiert, ohne dass die tieferliegende Ursache erkannt wurde.

          <br />
          <b>Unsere Arbeit folgt dem Grundsatz:</b> Der Körper verdient Zeit, Aufmerksamkeit und präzises Wahrnehmen.

          <br />
          Jede Sitzung beginnt mit einer <b>körperorientierten Abklärung Ihres Anliegens</b> und wird durch gezielte craniosacrale Arbeit fortgeführt. Dabei wird die natürliche Achse des Körpers wiederhergestellt, insbesondere durch Arbeit am Kopf.
        </div>
      </div>

      <div className="support-grid">
        <div className="steps-nav">
          <div className="steps-list">
            {steps.map((step, index) => (
              <button
                key={step.id}
                className={`step-button ${activeStep === index ? 'active' : ''}`}
                onClick={() => setActiveStep(index)}
                aria-label={`Schritt ${index + 1}: ${step.title}`}
                aria-current={activeStep === index ? 'step' : undefined}
              >
                <div className="step-icon-wrapper">
                  <img 
                    src={activeStep === index ? step.iconActive : step.iconInactive} 
                    alt={step.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  />
                </div>
                <div className="step-info">
                  <div className="step-header-row">
                    <span className="step-number">{`0${index + 1}`}</span>
                    <div className="step-duration">
                      <img src={clockIcon} alt="Dauer" style={{ width: '14px', height: '14px', marginRight: '4px' }} /> {step.duration}
                    </div>
                  </div>
                  <span className="step-title">{step.title}</span>
                </div>
                  <div className="step-arrow">
                    <img 
                      src={activeStep === index ? arrowGreenIcon : arrowGrayIcon} 
                      alt="Arrow" 
                      style={{ width: '20px', height: '20px' }} 
                    />
                  </div>
              </button>
            ))}
          </div>

          <div className="duration-note">
            Die Sitzungen dauern in der Regel <b>45–60 Minuten</b>, inklusive Erstgespräch.
          </div>

          <button className="book-button" type="button">
            Jetzt eine craniosacrale Sitzung buchen <img src={RightArrowIcon} alt="" style={{ width: '16px', height: '16px', marginLeft: '8px', filter: 'brightness(0) saturate(100%) invert(1)' }} />
          </button>
        </div>

        <div className="detail-wrapper">
          <div className="detail-card">
            <div className="detail-header">
              <div className="detail-header-icon">
                <img 
                  src={steps[activeStep].iconActive} 
                  alt={steps[activeStep].title} 
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </div>
              <div className="detail-header-content">
                <div className="detail-step-indicator">
                  {`0${activeStep + 1} / 0${steps.length}`}
                </div>
                <h3 className="detail-title">{steps[activeStep].detailTitle}</h3>
                <div className="detail-subtitle">{steps[activeStep].detailSubtitle}</div>
              </div>
            </div>

            <div className="detail-content">
              {steps[activeStep].content}
            </div>

            {steps[activeStep].infoBox && (
              <div className="info-box">
                <span className="info-box-title">{steps[activeStep].infoBox.title}</span>
                <p className="info-box-text">{steps[activeStep].infoBox.text}</p>
              </div>
            )}

            <div className="detail-footer">
              {steps.map((_, index) => (
                <div 
                  key={index} 
                  className={`pagination-dot ${activeStep === index ? 'active' : ''}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;

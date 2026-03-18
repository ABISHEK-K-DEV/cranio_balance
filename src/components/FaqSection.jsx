import { useState } from 'react'
import './FaqSection.css'
import chevronDownIcon from '../assets/ChevronDownIcon.svg'

const FAQ_ITEMS = [
  {
    id: 'faq-costs',
    question: 'Werden die Kosten für Craniosacral-Sitzungen von der Krankenkasse übernommen?',
    answerBlocks: [
      {
        type: 'paragraph',
        text: 'Die Kosten können je nach Vertrag von Privatkrankenkassen übernommen werden.',
      },
    ],
  },
  {
    id: 'faq-sleep-support',
    question:
      'Kann craniosacrale Körperarbeit bei Nervosität sowie bei Schlafproblemen und Schlafstörungen unterstützen?',
    answerBlocks: [
      {
        type: 'paragraph',
        text: 'Craniosacral-Therapie wirkt bei innerer Unruhe sowie bei Schlafproblemen unterstützend. Durch sanfte Berührungen im Bereich des Schädels werden die natürlichen Rhythmen des Körpers harmonisiert, die Durchblutung des Gehirns gefördert und ein Gefühl von Ruhe und Ausgleich unterstützt.',
      },
      {
        type: 'paragraph',
        text: 'Auch die achtsame Arbeit im Bereich des Halses und des Atlanto-Okzipitalgelenks also dem Übergang zwischen Schädel und Wirbelsäule unterstützt das Nervensystem dabei, zur Ruhe zu kommen. Gleichzeitig hilft sie, Spannungen zu lösen und mehr Leichtigkeit im Körper wahrzunehmen.'
      }
    ],
  },
  {
    id: 'faq-how-session-works',
    question: 'Wie läuft eine Craniosacrale-Sitzung ab?',
    answerBlocks: [
      {
        type: 'paragraph',
        text: 'Nach einem kurzen Vorgespräch legen Sie sich in Rückenlage auf die Liege. Dort darf der Körper zur Ruhe kommen, entspannen und loslassen. Anschließend beginnt die craniosacrale Arbeit mit einer sanften Berührung am Kopf und der  Die craniosacrale Arbeit erfolgt in ruhiger und sanfter Weise, sodass der Körper bestmöglich darauf eingehen kann.',
      }
    ],
  },
  {
    id: 'faq-number-of-sessions',
    question: 'Wie viele Sitzungen benötige ich, um meine Probleme zu lösen?',
    answerBlocks: [
      {
        type: 'paragraph',
        text: 'Oft ist bereits nach der ersten Sitzung eine Veränderung spürbar. Zu Beginn kann diese jedoch noch eher kurz anhalten. Mit mehreren Sitzungen wird die Wirkung häufig stabiler und nachhaltiger. Gerade bei jüngeren Menschen zeigt sich oft, dass der Körper besonders gut darauf reagiert.',
      }
    ],
  },
  {
    id: 'faq-babies',
    question: 'Sind Craniosacral-Sitzungen für Babys sicher?',
    answerBlocks: [
      {
        type: 'paragraph',
        text: 'Die craniosacrale Arbeit erfolgt sehr sanft, besonders bei Babys und Kindern. Die Berührungen lassen sich fast mit einem behutsamen Streicheln am Kopf vergleichen.',
      },
      {
        type: 'paragraph',
        text: 'Eine begleitende Person ist während der gesamten Sitzung selbstverständlich anwesend.',
      },
      {
        type: 'paragraph',
        text: 'Die craniosacrale Arbeit ist für die Bewerkstelligung der korrekten Entwicklung des Knochen- und Nervensystems - vor allem bei Babys - äußerst sinnvoll.',
      },
    ],
  },
  {
    id: 'faq-side-effects',
    question: 'Welche Nebenwirkungen können entstehen?',
    answerBlocks: [
      {
        type: 'paragraph',
        text: 'In einigen Fällen reagiert der Körper mit Müdigkeit oder Schläfrigkeit. Das ist völlig normal und ein Zeichen dafür, dass der Körper in einen Modus der Regeneration umschaltet.',
      },
    ],
  },
  {
    id: 'faq-before-after',
    question: 'Gibt es Empfehlungen für die Zeit vor und nach einer Craniosacral-Sitzung?',
    answerBlocks: [
      {
        type: 'paragraph',
        text: 'Ja, es gibt einige Empfehlungen für die Zeit vor und nach der Sitzung.',
      },
      {
        type: 'section',
        title: 'Vor der Sitzung:',
        text: 'Etwa eine Stunde vorher keine schwere Mahlzeit zu sich nehmen und nach Möglichkeit wenig oder kein Parfüm verwenden - das unterstützt die Wahrnehmung während der Sitzung.',
      },
      {
        type: 'section',
        title: 'Nach der Sitzung:',
        text: 'Trinken Sie ausreichend Wasser und gönnen Sie sich einen entspannten Spaziergang. Während des Gehens bewegen sich die Schädelknochen sanft in ihre neue Position, wodurch der Körper die Effekte der Sitzung optimal integrieren kann. Der Spaziergang stabilisiert die natürlichen Körperrhythmen, fördert die Durchblutung und lässt die neue Knochenposition nachhaltig nachwirken.',
      },
      {
        type: 'paragraph',
        text: 'Auch ein kurzer, entspannter Spaziergang kann wohltuend sein und dabei unterstützen, das Erlebte gut nachwirken zu lassen.',
      },
    ],
  },
]

function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleItem = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index))
  }

  return (
    <section className="faq-section" aria-label="FAQ">
      <div className="faq-container">
        <span className="faq-eyebrow">FAQ</span>
        <h2 className="faq-title">Häufig gestellte Fragen</h2>
        <div className="faq-list">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index
            const panelId = `faq-panel-${index}`
            const buttonId = `faq-button-${index}`

            return (
              <article className={`faq-item${isOpen ? ' faq-item--open' : ''}`} key={item.id}>
                <button
                  id={buttonId}
                  className="faq-question"
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggleItem(index)}
                >
                  <span>{item.question}</span>
                  <span className={`faq-chevron${isOpen ? ' faq-chevron--open' : ''}`} aria-hidden="true">
                    <img src={chevronDownIcon} alt="" />
                  </span>
                </button>

                <div
                  id={panelId}
                  className={`faq-answer${isOpen ? ' faq-answer--open' : ''}`}
                  role="region"
                  aria-labelledby={buttonId}
                >
                  <div className="faq-answer-content">
                    {item.answerBlocks.map((block, blockIndex) => (
                      <div
                        key={`${item.id}-block-${blockIndex}`}
                        className={`faq-answer-block faq-answer-block--${block.type}`}
                      >
                        {block.title ? <h3>{block.title}</h3> : null}
                        <p>{block.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FaqSection

import './BenefitsSection.css';
import shieldIcon from '../assets/sheild.svg';
import moonIcon from '../assets/moon.svg';
import thunderIcon from '../assets/thunder.svg';
import heartIcon from '../assets/heart.svg';

const benefitItems = [
  {
    icon: shieldIcon,
    iconAlt: 'Schutzsymbol',
    title: 'Spannungen sanft lösen',
    text: 'Craniosacrale Körperarbeit unterstützt dabei, Schmerzen im Kopf-, Nacken-, Rücken-, Knie- oder Schulterbereich zu minimieren. Viele Menschen empfinden sie auch nach körperlicher Belastung, Sport oder belastenden Erfahrungen als wohltuend und ausgleichend.',
  },
  {
    icon: moonIcon,
    iconAlt: 'Mondsymbol',
    title: 'Strukturelle Balance',
    text: 'Die craniosacrale Arbeit unterstützt dabei, mehr Balance im Körper wahrzunehmen und eine natürliche Aufrichtung zu fördern. Sie löst Spannungen in Rücken, Schultern und Kopf. Durch die direkte Arbeit über den Parasympathikus (den Vagusnerv) sowie die Ausbalancierung von Sympathikus und Parasympathikus trägt sie zur Beruhigung des Nervensystems bei und wirkt revitalisierend.',
  },
  {
    icon: thunderIcon,
    iconAlt: 'Blitzsymbol',
    title: 'Atemraum und innere Organe',
    text: 'Im viszeralen Bereich, also im Bereich der inneren Organe, wirkt die Sitzung wohltuend und ausgleichend. Nach einer Nasenoperation oder traumatischen Ereignissen unterstützt sie die Nasenatmung.',
  },
  {
    icon: heartIcon,
    iconAlt: 'Herzsymbol',
    title: 'Nervensystem, Schlaf und Depression',
    text: 'Craniosacrale Körperarbeit schenkt Momente tiefer Ruhe und entlastet das Nervensystem. Besonders bei innerer Unruhe oder Schlafproblemen wird sie als wohltuend und ausgleichend erlebt und unterstützt auch bei Schlafstörungen. Bei einer klinischen Depression sollte Cranio immer ergänzend zur ärztlich oder psychotherapeutisch verordneten Behandlung eingesetzt werden. Sie hilft, Stress abzubauen, innere Ruhe zu fördern und das Körperbewusstsein zu stärken, wodurch sich Betroffene insgesamt wohler fühlen.',
  },
];

function BenefitsSection() {
  return (
    <section className="benefits-section" id="benefits">
      <div className="benefits-shell">
        <div className="benefits-header-row">
          <div className="benefits-header-main">
            <span className="benefits-label">WIRKUNG DER SITZUNG</span>
            <h2>
              Ganzheitliches Wohlbefinden:
              <br />
              Die Vorteile craniosacraler Koerperarbeit
            </h2>
          </div>
          <p className="benefits-intro">
            Auf körperlicher Ebene unterstützt craniosacrale Körperarbeit dabei, Spannungen zu lösen
            und das Gleichgewicht zu fördern. Die sanfte Praxis wirkt in vielen Bereichen wohltuend und ausgleichend.
          </p>
        </div>

        <div className="benefits-grid" role="list" aria-label="Vorteile der craniosacralen Koerperarbeit">
          {benefitItems.map((item) => (
            <article key={item.title} className="benefit-card" role="listitem">
              <div className="benefit-icon-wrap">
                <img className="benefit-icon" src={item.icon} alt={item.iconAlt} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BenefitsSection;

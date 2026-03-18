import './WhoForSection.css';
import BabyIcon from '../assets/baby.svg';
import Bag from '../assets/bag3.svg';
import MultiPerson from '../assets/multiPerson.svg';
import SinglePerson from '../assets/singlePerson.svg';

const WhoForSection = () => {
  const sections = [
    {
      icon: BabyIcon,
      iconBg: '#FFECEC',
      iconAlt: 'Baby Icon',
      title: 'Craniosacral bei Babys',
      age: '4 Monate-2 Jahre',
      items: [
        'Unruhiger Schlaf',
        'Koliken oder Magen-Darm-Beschwerden',
        'Häufiges Weinen oder Reizbarkeit',
        'Herausforderungen beim Trinken',
        'Unruhe rund ums Füttern',
      ],
    },
    {
      icon: Bag,
      iconBg: '#EEF2FF',
      iconAlt: 'Tasche Icon',
      title: 'Kinder & Jugendliche',
      age: '3–18 Jahre',
      items: [
        'Schlafprobleme',
        'Verdauungsbeschwerden',
        'Innere Unruhe oder Anspannung',
        'Konzentrationsschwierigkeiten',
        'Muskel- oder Haltungsspannungen',
      ],
    },
    {
      icon: MultiPerson,
      iconBg: '#F3E8FF',
      iconAlt: 'Mehrere Personen Icon',
      title: 'Erwachsene',
      age: '18–65 Jahre',
      items: [
        'Stress oder innere Anspannung',
        'Konzentrationsschwierigkeiten im Alltag',
        'Kopf-, Nacken-, Rücken-, Knie- oder Schulterschmerzen',
        'Schlafprobleme',
        'Muskelverspannungen nach körperlicher Belastung oder Sport',
      ],
    },
    {
      icon: SinglePerson,
      iconBg: '#E0F2FE',
      iconAlt: 'Einzelperson Icon',
      title: 'Seniorinnen & Senioren',
      age: '65+ Jahre',
      items: [
        'Stress und innere Anspannung',
        'Kopf-, Nacken-, Rücken-, Knie- oder Schulterschmerzen',
        'Migräne',
        'Schlafprobleme',
        'Sanfte Begleitung bei Beschwerden im Bereich der inneren Organe',
        'Krampfadern',
      ],
    },
  ];

  return (
    <section className="who-for-section">
      <div className="who-for-panel">
        <div className="who-for-header">
          <span className="section-label">FÜR WEN IST ES GEEIGNET?</span>
          <h2>Ganzheitliches Wohlbefinden für die ganze Familie</h2>
        </div>
        <div className="who-for-grid">
          {sections.map((section) => (
            <div key={section.title} className="who-for-card">
              <div
                className="card-icon"
                style={{
                  backgroundColor: section.iconBg,
                }}
              >
                <img className="card-icon-inner" src={section.icon} alt={section.iconAlt} />
              </div>
              <h3 className="card-title">{section.title}</h3>
              <p className="card-age">{section.age}</p>
              <ul className="card-list">
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoForSection;

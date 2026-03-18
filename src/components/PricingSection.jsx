import { useState } from 'react'
import './PricingSection.css'
import planTwoStarIcon from '../assets/pricing_2nd_plan_star.svg'
import planThreeStarIcon from '../assets/pricing_3rd_plan_start.svg'
import activeArrowIcon from '../assets/pricing_selected_ArrowRight.svg'
import arrowRight from '../assets/pricing_ArrowRight.svg'
import tickIcon from '../assets/pricing_tick.svg'

// Icons
const pricingData = [
    {
        id: 'single',
        sessions: '1 SITZUNG',
        title: 'Einzelsitzung',
        price: '150€',
        priceSubtext: 'einmalig',
        idealFor: 'Ideal für: Erste Sitzung, kurzfristige Spannungen, erstes Kennenlernen',
        description: 'Für alle, die Craniosacral-Arbeit zunächst in einer einzelnen Sitzung erleben möchten.',
        features: [
            '60-minütige Sitzung',
            'Persönliches Erstgespräch',
            'Sanfte Hinweise für danach',
            'Ruhiger, achtsamer Rahmen'
        ],
        buttonText: 'Einzelsitzung buchen',
        highlighted: false,
        badge: null
    },
    {
        id: 'starter',
        sessions: '3 SITZUNGEN',
        title: 'Einstiegspaket',
        price: '135€',
        priceSubtext: 'pro Sitzung · €45 sparen',
        idealFor: 'Ideal für: Stress, anhaltende Spannungen, Unterstützung für das Nervensystem',
        description: 'Für Menschen, die sich mehr Kontinuität und sanfte Begleitung über mehrere Sitzungen hinweg wünschen.',
        features: [
            '3 Sitzungen insgesamt',
            'Erstgespräch und kurze Reflexionen',
            'Individuelle Begleitung',
            'Mehr Raum für Regulation und Balance'
        ],
        buttonText: 'Jetzt Craniosacral-Sitzungen buchen',
        highlighted: true,
        badge: 'Am beliebtesten'
    },
    {
        id: 'deep',
        sessions: '10 SITZUNGEN',
        title: 'Vertiefendes Begleitpaket',
        price: '120€',
        priceSubtext: 'pro Sitzung · €300 sparen',
        idealFor: 'Ideal für: Anhaltende Schmerzen, länger bestehende Spannungen, langfristige Begleitung',
        description: 'Für Menschen, die sich eine beständige und vertiefende Begleitung über einen längeren Zeitraum wünschen.',
        features: [
            '10 Sitzungen insgesamt für den Preis von 8',
            'Ausführliches Erstgespräch und begleitende Reflexion',
            'Persönliche Unterstützung im Verlauf',
            'Vorrangige Terminvergabe für Kontinuität'
        ],
        buttonText: 'Jetzt Begleitpaket anfragen',
        highlighted: false,
        badge: 'Am preiswertesten'
    }
]

function PricingCard({ data, isActive, onClick, selectedPlan }) {
    const { sessions, title, price, priceSubtext, idealFor, description, features, buttonText, badge } = data;

    return (
        <div className={`pricing-card${isActive ? ' pricing-card--active' : ''}`} onClick={onClick}>
            <div className={`pricing-card__header${isActive ? ' pricing-card__header--active' : ''}`}>
                <div className="pricing-card__sessions-row">
                    <span className="pricing-card__sessions">{sessions}</span>
                    {data.id === 'starter' && (
                        <span className={`pricing-card__badge pricing-card__badge-2nd-plan`}>
                            <img src={planTwoStarIcon} alt="Beliebtes Angebot" className="pricing-card__badge-icon" />
                            {badge}
                        </span>
                    )}
                    {data.id === 'deep' && (
                        <span className={`pricing-card__badge pricing-card__badge-3nd-plan`}>
                            <img src={planThreeStarIcon} alt="Bestes Preis-Leistungs-Verhältnis" className="pricing-card__badge-icon" />
                            {badge}
                        </span>
                    )}
                </div>
                <h3 className="pricing-card__title">{title}</h3>
                <div className="pricing-card__price-row">
                    <span className="pricing-card__price">{price}</span>
                    <span className="pricing-card__price-subtext">{priceSubtext}</span>
                </div>
            </div>

            <div className="pricing-card__body">
                <div className={`pricing-card__ideal`}>
                    {idealFor}
                </div>
                <p className="pricing-card__description">{description}</p>
                <ul className="pricing-card__features">
                    {features.map((feature, index) => (
                        <li key={index} className="pricing-card__feature">
                            <img src={tickIcon} alt="Inklusive" className="pricing-card__feature-icon" />
                            {feature}
                        </li>
                    ))}
                </ul>
                <div className="pricing-card__button-wrapper">
                    <button className={`pricing-card__button ${isActive ? 'pricing-card__button--outlined' : 'pricing-card__button--filled'}`}>
                        {buttonText}
                        {isActive ? <img src={activeArrowIcon} alt="Aktiv" className="pricing-card__button-arrow" /> : <img src={arrowRight} alt="Jetzt buchen" className="pricing-card__button-arrow" />}
                    </button>
                </div>
            </div>
        </div>
    )
}

function PricingSection() {
    const [activePlan, setActivePlan] = useState('starter') // Second plan active by default

    return (
        <section className="pricing-section" id="pricing">
            <div className="container">
                <div className="pricing-section__header">
                    <span className="pricing-section__subtitle">INVESTIEREN SIE IN SICH SELBST</span>
                    <h2 className="pricing-section__title">Finden Sie die passende Craniosacral-Begleitung</h2>
                    <p className="pricing-section__description">
                        Ob als erster Schritt, als kontinuierliche Unterstützung oder als vertiefender Prozess jede Option
                        schenkt Ihnen Zeit, persönliche Aufmerksamkeit und eine achtsame Begleitung.
                    </p>
                </div>

                <div className="pricing-grid">
                    {pricingData.map((plan) => (
                        <PricingCard
                            key={plan.id}
                            data={plan}
                            selectedPlan={activePlan}
                            isActive={activePlan === plan.id}
                            onClick={() => setActivePlan(plan.id)}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default PricingSection
